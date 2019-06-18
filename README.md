# @DataStream/Guidelines
Calculate water quality guidelines.

## Supported Guidelines
### CA: Environment and Climate Change Canada
**Canadian Council of Ministers of the Environment (CCME)**
- Short-term Canadian Water Quality Guidelines (CWQG) (Acute)
- Long-term Canadian Water Quality Guidelines (CWQG) (Chronic)

** Regional **
- AB: Alberta Environment and Parks
- BC: British Columbia Ministry of Environment, Environment and Climate Change Canada
- MB: Manitoba Sustainable Development
- NB: Environment and Climate Change Canada, New Brunswick Department of Environment and Local Government / New Brunswick Department of Environment and local government
- NL: Environment and Climate Change Canada, Newfoundland and Labrador Department of Municipal Affairs and Environment
- NS: Environment and Climate Change Canada / Nova Scotia Environment
- ON: Ontario Ministry of the Environment and Climate Change
- PE: Environment and Climate Change Canada, Prince Edward Island Department of Communities, Land and Environment
- QC: Environment and Climate Change Canada, Ministère du Développement durable, Environnement et Lutte contre les changements climatiques du Québec
- SK: Saskatchewan Water Security Agency
- NT: Environment and Climate Change Canada, Parks Canada, Government of Northwest Territories (Environment and Natural Resources)
- NU: Inherit from NT
- YU: Yukon Environment, Environment and Climate Change Canada, Parks Canada

### US: United States Environmental Protection Agency (US EPA)
- Criterion Maximum Concentration (CMC) (Acute)
- Criterion Continuous Concentration (CCC) (Chronic)


## Usage
```javascript




```

## Sources
- [Water Hardness Summary](http://www.aqion.de/site/water-hardness)
- [DataStream Mapping](https://docs.google.com/spreadsheets/d/1J5cNUYyzuPutKEnF5BSnvTW1JAbHX-p1cSfXhQIS8d8/edit#gid=1992238860)
- [Dissolved Oxygen Calculation](https://water.usgs.gov/admin/memo/QW/qw81.11.html)

### Standards
- [CCME](http://st-ts.ccme.ca/en/index.html)
- [Canada Regional Guidelines](https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/water-quality-canadian-rivers.html) -> Annexes
- [US EPA]()


## TODO
- [ ] feat: add in formulas
- [ ] fix: verify formulas
- [ ] fix: hardness formula - verify
- [ ] feat: add in regional guidelines
- [ ] feat: add in default hardness values
```
"cadmium": 1,
"copper": 2,
"lead": 2,
"nickel": 25,
"zinc": 30,
"ammonia": 0.019,
"nitrite": 0.197,
"uranium": 15,
"aluminiumQC": 87
```
- [ ] doc: ADD links to each spec sheet per formula
