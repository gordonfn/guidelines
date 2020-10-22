<h1 align="center">
  <img src="https://raw.githubusercontent.com/gordonfn/guidelines/master/docs/images/datastream.svg?sanitize=true" alt="DataStream Logo" width="400">
  <br/>
  Calculation of water quality guidelines.
  <br/>
  <br/>
</h1>

<p align="center">See our <a href="https://docs.google.com/spreadsheets/d/1IwvizmcXDDfogyRA5NLoSx2t3GXYNYmOhoI_-TnrVGY">Water Quality Guidelines Summary</a> spreadsheet</p>

## DataStream 

DataStream ([DataStream.org](http://gordonfoundation.ca/initiatives/datastream)) is an online open-access platform for sharing water quality data. Data is uploaded, stored and shared in DataStream’s Open Data Schema -- a model based on the WQX standard for the Exchange of Water Quality Data. DataStream is free to use and allows users to query, visualize, and download data in this standardized format. To date, over 9 million water quality observations have been published across DataStream’s three regional platforms (Mackenzie DataStream,  Lake Winnipeg DataStream, and Atlantic DataStream) by watershed groups, Indigenous organizations, researchers and governments at all levels.

DataStream is led nationally by [The Gordon Foundation](http://gordonfoundation.ca) and is carried out in collaboration with regional partners and monitoring networks. Data contributors maintain ownership of their data which are published under open data licenses.

## Guidelines
We've put together a detailed breakdown of [Water Quality Guidelines](https://datastream.org/water-quality-guidelines) that can be found on our website.

### Spreadsheet Formulas
- Are in [TeX](https://en.wikipedia.org/wiki/TeX) notation which can be easily converted into other formats (HTML, MathML, SVG)
- In some formulas parameters have boundaries on what value can be used, instead of conditional statements. `max(lowest, min(parameter, highest))`
- Conditional statements are ordered from lowest to highest values. `if (low ≤ paramater ≤ high) {`
- `else` is used to indicate a fallback when a parameter is `undefined`


## Sources
- [DataStream Mapping](https://docs.google.com/spreadsheets/d/1IwvizmcXDDfogyRA5NLoSx2t3GXYNYmOhoI_-TnrVGY)

### Standards
- [CCME](http://st-ts.ccme.ca/en/index.html)
- [Canada Regional Guidelines](https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/water-quality-canadian-rivers.html) -> Annexes
- [US EPA](https://www.epa.gov/wqc)

<div align="center">
  <a href="http://gordonfoundation.ca"><img src="https://raw.githubusercontent.com/gordonfn/guidelines/master/docs/images/the-gordon-foundation.svg?sanitize=true" alt="The Gordon Foundation Logo" width="200"></a>
</div>
