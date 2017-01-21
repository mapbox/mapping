A repository of world city boundaries to be used for mapping projects.

- **Dataset:** [`autochethan/cistweviu000a2tptqasdxpmo`](https://www.mapbox.com/studio/datasets/autochethan/cistweviu000a2tptqasdxpmo)
- **Tileset**: [`autochethan.cistweviu000a2tptqasdxpmo-2ft28`](https://www.mapbox.com/studio/tilesets/autochethan.cistweviu000a2tptqasdxpmo-2ft28/)
- Draw new and modify existing boundaries directly in the dataset with appropriate properties
- To update all the maps with the new data `Export to WorldCities tileset`
- To get a geojson of any particular boundary, open the dataset editor and click the feature for the raw geojson
- Download the entire dataset as a featureCollection from the dataset page

## Defining mapping boundaries

A metropolitan has two mapping boundaries
- `Core` area that carries mostly non residential business traffic of a city
- `Exterior` area that includes the urbanized zone around the core area

<img width="445" alt="openstreetmap_navigation_data_map" src="https://cloud.githubusercontent.com/assets/126868/18376698/f5b03470-767e-11e6-995a-f4131384ba86.png"><br>
_Illustration of mapping boundaries for a city_

**Core area**
- Includes downtown and central business district
- Includes the primary route from downtown to the main airports

**Exterior area**
- Extends upto the bypass highway or ring road for the city
- The exterior area can include multiple cores

### Metadata
Each boundary polygon will have the following properties:
- `label=city_name`
- `country=country_iso2_code`
- `boundary=core or exterior`
- `is_in` name of the bigger geographci area the place s part of (north-america/south-america/asia/europe/central-america/africa/australia/)
