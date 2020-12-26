/* global describe, it */
const expect = require('chai').expect
const { formulaParser, params } = require('../bin/formulaParser.js')

describe('Parser', function () {
  describe('Conditionals', function () {
    it('Should convert A ≤ B < C', function (done) {
      const { code } = formulaParser('if (A ≤ B < C)')

      expect(code).to.equal('if (A <= B && B < C)')
      done()
    })

    it('Should convert A ≥ B > C', function (done) {
      const { code } = formulaParser('if (A ≥ B > C)')

      expect(code).to.equal('if (A >= B && B > C)')
      done()
    })

    it('Should convert A == B ∧ B != C ∨ D', function (done) {
      const { code } = formulaParser('if (A == B ∧ B != C ∨ D)')

      expect(code).to.equal('if (A === B && B !== C || D)')
      done()
    })

    it('Should return null', function (done) {
      const { code } = formulaParser('if (A) \\{ NULL \\}')

      expect(code).to.equal('if (A) {\n    return null\n  }')
      done()
    })

    it('Should return value', function (done) {
      const { code } = formulaParser('if (A) \\{ 0 \\}')

      expect(code).to.equal('if (A) {\n    return 0\n  }')
      done()
    })

    it('Should return formula', function (done) {
      const { code } = formulaParser('if (A) \\{ 1+1 \\}')

      expect(code).to.equal('if (A) {\n    return math.evaluate(`1+1`)\n  }')
      done()
    })
  })

  describe('Functions', function () {
    it('Should convert ln(...)', function (done) {
      const { code } = formulaParser('ln(0)')

      expect(code).to.equal('return math.evaluate(`log(0, e)`)')
      done()
    })

    it('Should convert e^{...}', function (done) {
      const { code } = formulaParser('e^{0}')

      expect(code).to.equal('return math.evaluate(`exp(0)`)')
      done()
    })

    it('Should convert log_n(...)', function (done) {
      const base2 = formulaParser('log_2(0)')
      expect(base2.code).to.equal('return math.evaluate(`log(0, 2)`)')

      const base10 = formulaParser('log_10(pH)')
      expect(base10.code).to.equal('return math.evaluate(`log(${pH}, 10)`)')
      done()
    })

    it('Should convert x^{...}', function (done) {
      const base10 = formulaParser('10^{0}')
      expect(base10.code).to.equal('return math.evaluate(`pow(10, 0)`)')

      const baseVar = formulaParser('pH^{pH}')
      expect(baseVar.code).to.equal('return math.evaluate(`pow(${pH}, ${pH})`)')
      done()
    })
  })

  describe('Brackets', function () {
    it('Should convert A × B', function (done) {
      const { code } = formulaParser('A × B')

      expect(code).to.equal('return math.evaluate(`A * B`)')
      done()
    })

    it('Should convert {A \\over B}', function (done) {
      const one = formulaParser('{A \\over B}')
      expect(one.code).to.equal('return math.evaluate(`((A)/(B))`)')

      const two = formulaParser('{A \\over {B \\over C}}')
      expect(two.code).to.equal('return math.evaluate(`((A)/(((B)/(C))))`)')

      const three = formulaParser('{A \\over {B \\over {C \\over D}}}')
      expect(three.code).to.equal(
        'return math.evaluate(`((A)/(((B)/(((C)/(D))))))`)'
      )
      done()
    })

    it('Should convert {[(A)]}}', function (done) {
      const { code } = formulaParser('{[(A)]}')
      expect(code).to.equal('return math.evaluate(`(A)`)')
      done()
    })

    it('Should remove excess brackets', function (done) {
      // let one = formulaParser('{A \\over B}')
      // expect(one.code).to.equal('return math.evaluate(`((A)/(B))`)')
      //
      // let two = formulaParser('{A \\over {B \\over C}}')
      // expect(two.code).to.equal('return math.evaluate(`((A)/(((B)/(C))))`)')
      done()
    })

    // Over
    // ({[]})
  })

  describe('Variables', function () {
    it('Should convert alone variables', function (done) {
      for (const param of params) {
        if (param === 'hardness') continue
        const alone = formulaParser(`${param}`)
        expect(alone.code).to.equal('return math.evaluate(`${' + param + '}`)')
        expect(alone.variables.length).to.equal(1)
        expect(alone.variables[0]).to.equal(param)
        expect(alone.hardness).to.equal(false)

        const withNumber = formulaParser(`10${param}`)
        expect(withNumber.code).to.equal(
          'return math.evaluate(`10*${' + param + '}`)'
        )

        const withBracket = formulaParser(`(${param})`)
        expect(withBracket.code).to.equal(
          'return math.evaluate(`(${' + param + '})`)'
        )
      }

      const { code, hardness } = formulaParser('hardness')
      expect(code).to.equal('return math.evaluate(`${hardness}`)')
      expect(hardness).to.equal(true)

      done()
    })

    it('Should convert multi variables', function (done) {
      const { code, variables, hardness } = formulaParser(params.join(' + '))
      expect(code).to.equal(
        'return math.evaluate(`${' + params.join('} + ${') + '}`)'
      )
      expect(variables.length).to.equal(params.length - 1)
      expect(hardness).to.equal(true)
      done()
    })
  })
})
