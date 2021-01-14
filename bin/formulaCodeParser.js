// Formula Code
const hardnessParams = [
  'TH',
  'CaCO3',
  'NCH',
  'CH',
  'CaIon',
  'MgIon',
  'Ca',
  'Mg'
]
const params = Object.keys(require('../lib/formula_params.json')) // IMPORTANT: Elements that contain other must appear earlier in the list
  .filter((param) => !hardnessParams.includes(param))
params.push('hardness')

const formulaParser = (formula, multiplier = 1) => {
  // console.log('|>', formula)
  let code = formula
    // division in functions
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))')
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    // math functions
    .replace(/log_(\d+)\(([^{}]*?)\)/g, 'log($2, $1)')
    .replace(/ln\(([^{}]*?)\)/g, 'log($1, e)')
    .replace(/e\^{([^{}]*?)}/g, 'exp($1)')
    .replace(
      new RegExp(`(\\)|\\d+|${params.join('|')})\\^\\{([^\\{\\}]*?)\\}`, 'g'),
      'pow($1, $2)'
    ) // 10^x, pH^2

    // division out side of functions
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))')
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested
    .replace(/{([^{}]+) \\over ([^{}]+)}/g, '(($1)/($2))') // Allow for nested

    // multipliers
    .replace(/×/g, '*')
    .replace(
      new RegExp(`(\\)|\\d+)\\s*(\\(|exp|pow|ln|log|${params.join('|')})`, 'g'),
      '$1*$2'
    )
    // replace brackets
    .replace(/\[/g, '(')
    .replace(/\]/g, ')')
    .replace(/(?<!\\)\{/g, '(')
    .replace(/(?<!\\)\}/g, ')')
    .replace(/\(\(([^()]*?)\)\)/g, '($1)') // remove extra brackets (x2)
    .replace(/\(\(([^()]*?)\)\)/g, '($1)') // remove extra brackets (x3)

    // Logic wrapper
    .replace(/([≤≥<>=]) (\w+) ([≤≥<>=])/g, '$1 $2 && $2 $3')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/∧/g, '&&')
    .replace(/∨/g, '||')
    .replace(/ == /g, ' === ')
    .replace(/ != /g, ' !== ')
    .replace(/\\\{ (NULL) \\\}/g, '{\n    return null\n  }')
    .replace(/\\\{ ([\d]+[.]?[\d]*) \\\}/g, '{\n    return $1\n  }')
    .replace(/\\\{ \(([\d.]+),([\d.]+)\) \\\}/g, '{\n    return [$1,$2]\n  }')
    .replace(/\\\{ \(([\d.]+.*?),([\d.]+.*?)\) \\\}/g, '{\n    return [math.evaluate(`$1`),math.evaluate(`$2`)]\n  }')
    .replace(/\\\{ (.*?) \\\}/g, '{\n    return math.evaluate(`$1`)\n  }')

  // code = cleanBrackets(code)

  if (!code.includes('if')) {
    if (code === 'NULL') {
      code = 'return null'
    } else if (code.match(/^[\d.]+$/)) {
      code = `return ${code}`
    } else if (code.match(/\([\d.]+,[\d.]+\)/)) {
      code = code
        .replace(/\(\)/, '')
      code = `return [${code}]`
    } else if (code.match(/\([\d.]+.*?,[\d.]+.*?\)/)) {
      code = code
        .replace(/^\((.*),(.*)\)$/, 'return [math.evaluate(`$1`),math.evaluate(`$2`)]')
    } else {
      code = `return math.evaluate(\`${code}\`)`
    }
  }

  if (!hasBalancedBrackets(code.replace(/[^(){}\[\]]/g, ''))) {
    console.error(code)
    throw new Error('Formula is unbalanced')
  }

  // variables
  const variables = [] // existing variables
  let hardness = false // existing variables for hardness
  for (const param of params) {
    if (hardnessParams.includes(param)) continue

    const variablePattern = new RegExp(
      `(?<![{a-zA-Z])(${param})([^}a-zA-Z]?)`,
      'g'
    )
    if (!code.match(variablePattern)) continue

    if (param === 'hardness') hardness = true
    else variables.push(param)

    code = code
      .split('\n')
      .map((condition) => {
        if (!condition.includes('math.evaluate')) return condition
        return condition.replace(variablePattern, '${$1}$2')
      })
      .join('\n')
  }

  const rangePattern = /^(.*)return \[(.+),(.+)\](.*)$/
  code = code
    .split('\n')
    .map((condition) => {
      if (multiplier !== 1 && condition.includes('return') && !condition.includes('null')) {
        // formula normalization
        // multiplier are assumed to be multiples of 10, so are safe to to do in raw js
        if (condition.match(rangePattern)) { // on range
          condition = condition.replace(rangePattern, `$1return [$2*${multiplier},$3*${multiplier}]$4`)
        } else {
          condition += `*${multiplier}`
        }
      }

      return condition
    })
    .join('\n')
  return { code, hardness, variables }
}

// Source: https://levelup.gitconnected.com/solving-balanced-brackets-in-javascript-with-stacks-edbc52a57309
const hasBalancedBrackets = (input) => {
  let brackets = "[]{}()"
  let stack = []

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket)
    //console.log(`The current element is ${bracket}, which has an index in input of ${input.indexOf(bracket)}, and matches the bracket with index ${bracketsIndex} in brackets`)
    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
      //console.log(`this is an opening bracket. The address of its matching closing bracket in brackets is ${bracketsIndex + 1}. Adding that index to the stack makes the stack ${stack}`)
    } else {
      //console.log(`this is a closing bracket, so ${stack.pop()} is being popped off the stack`)
      if(stack.pop() !== bracketsIndex) {
        console.log(input)
        return false;
      }
    }
  }
  return stack.length === 0
}

// TODO simplify brackets
// https://codereview.stackexchange.com/questions/188096/simple-parenthesis-removal-javascript
// https://stackoverflow.com/questions/57410831/how-to-remove-unnecessary-parenthesis

const buildCode = (name, parsed) => {
  const fallbackMatch = parsed.code.match(/else \{\sreturn ([\d.]+)\s\}$/)
  const fallback = fallbackMatch ? fallbackMatch[1] : 'null'
  const code = `
const ${name} = (params) => {
  ${parsed.hardness ? 'const hardness = calculateHardness(params)' : ''}
  ${
    parsed.hardness
      ? `if ( !math.isValid(hardness) ) { return ${fallback} }`
      : ''
  }
  ${
    parsed.variables.length
      ? `const { ${parsed.variables.join(', ')} } = params`
      : ''
  }
  ${
    parsed.variables.length
      ? `if ( !math.isValid(${parsed.variables.join(
          ') || !math.isValid('
        )}) ) { return null }`
      : ''
  }
  ${parsed.code}
  ${
    parsed.code.indexOf('return') !== 0 && !parsed.code.includes('else {')
      ? 'return null'
      : ''
  }
}
`.replace(/\n\s*\n/g, '\n')
  return code
}

const buildTestInputs = (params, key = '', value = 0) => {
  const obj = {}
  for (const param of params) {
    if (param === 'hardness') {
      obj.TH = param === key ? value : 0
    } else {
      obj[param] = param === key ? value : 0
    }
  }

  return obj
}

const buildTest = (name, { code, variables, hardness }) => {
  let test = ''
  // search for vars
  for (const variable of variables) {
    test += `
    it('Should not break with no ${variable}', function (done) {
      try {
        formula.${name}(${JSON.stringify(buildTestInputs(variables))})
        formula.${name}(${JSON.stringify(
      buildTestInputs(variables, variable, null)
    )})
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    `

    const lowerPattern = RegExp(`([\\d\\.]+) [<=]+ ${variable}`, 'g')
    const lowerBounds = [
      ...new Set(
        (code.match(lowerPattern) || []).map((match) =>
          Number.parseFloat(match.replace(lowerPattern, '$1'))
        )
      )
    ]

    if (lowerBounds.length) {
      test += `
    it('Should not break with ${variable} lowerbounds', function (done) {
      try {${lowerBounds
        .map(
          (value) => `
        formula.${name}(${JSON.stringify(
            buildTestInputs(variables, variable, value - 1)
          )})`
        )
        .join('')}
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    `
    }

    const upperPattern = RegExp(`${variable} [<=]+ ([\\d\\.]+)`, 'g')
    const upperBounds = [
      ...new Set(
        (code.match(upperPattern) || []).map((match) =>
          Number.parseFloat(match.replace(upperPattern, '$1'))
        )
      )
    ]

    if (upperBounds.length) {
      test += `
    it('Should not break with ${variable} upperbounds', function (done) {
      try {${upperBounds
        .map(
          (value) => `
        formula.${name}(${JSON.stringify(
            buildTestInputs(variables, variable, value + 1)
          )})`
        )
        .join('')}
      } catch (e) {
        expect.fail(e.message)
      }
      done()
    })
    `
    }
  }
  return test
}

const build = (name, formula, multiplier = 1) => {
  const parsed = formulaParser(formula, multiplier)

  const code = buildCode(name, parsed)
  const test = buildTest(name, parsed)

  return { code, test }
}

module.exports = {
  build,
  buildCode,
  buildTest,
  formulaParser,
  params,
  hardnessParams
}
