# Trimark Node

A small Node wrapper for the Trimark API.

## Installation

### NPM

```bash
$ npm install trimark-node
```

### Yarn

```bash
$ yarn add trimark-node
```

## Usage

You must have an API token supplied by Trimark in order to use the API.

```js
import Trimark from 'trimark-node';

const client = Trimark("my-token");

client.getSites();                                             // Retrieve all the sites for the account
client.sites[0].getPoints();                                   // Retrieve all the sensor points for the site
client.sites[0].points[0].history({ timeFrame: 'Yesterday' }); // Retrieve all of the data points for the sensor and the given time frame
```

## API

### Trimark

```
(apiToken) -> { sites: Array<Site> | null, getSites: () -> void }
```

The main wrapper for the API, allows you to request all sites be fetched.
After the sites are fetched `client.sites` will be populated with an array
of all the sites.

### Site

```
(
  getData: Function,           // A data getter that is passed down from the main wrapper
  site: TrimarkSiteInput       // The site as returned from the Trimark API
) -> {
  id: number,                  // The site ID
  name: string,                // The site name
  type: string,                // The type of site
  points: Array<Point> | null, // An array of points for the site, or null
  getPoints: () -> void        // Fetch all the points and populate the array
}
```

### Point

```
(
  getData: Function,                                   // A data getter passed down from the Site object
  siteId: number,                                      // The site id that this point belongs to
  point: TrimarkPointInput                             // The point as returned from the Trimark API
) -> {
  siteId: number,                                      // The site id that this point belongs to
  id: number,                                          // The id for this sensor point
  uom: string,                                         // The unit of measure for the data points
  displayName:                                         // The display name for the sensor point
  history: (query: Query) -> Promise<Array<DataPoint>> // Fetch the sensor data for this point
}
```

### DataPoint

```
(dataPoint: TrimarkDataPointInput) -> {
  intervalBegin: Object,  // The starting datetime for this data point, as a moment
  intervalEnd: Object,    // The ending datetime for this data point, as a moment
  averageValue: number,   // The average value for this data point
  minValue: number,       // The minimum value for this data point
  maxValue: number,       // The maximium value for this data point
  dataQuality: string,    // The data quality for this point
  interval: number,       // The interval of time this data point represents, in seconds
  pointId: number,        // The sensor point that this belongs to
  name: string,           // The name of the sensor point
  displayName: ?string,   // The display name for this sensor point
  uom: ?string,           // The unit of measure for this sensor point
  sumValue: ?number,      // The sum of the values for this sensor point
  rollupValue: ?number,   // The roll up value for this sensor point
  rollupUom: ?string,     // The unit of measure for the roll up value
  sampleTime: ?SampleTime // The intervals at which samples are taken
}
```

### Query

```
{
  timeFrame: enum TimeFrame,
  sampleTime: ?enum SampleTime,
  startDateTime: ?string,
  endDateTime: ?string
}
```

The representation of the query object that can be sent when fetching historical
data for a sensor point.

If a start and end date are given, those values will override anything passed in
to the `timeFrame` option, effectively transforming it to `Custom`.

### TimeFrame

An enum, one of:
```
'Today' | 'Yesterday' | 'Last3Days' | 'Last7Days' | 'MonthToDate' | 'LastMonth' | 'YearToDate' | 'LastYear' | 'Custom'
```

### SampleTime

An enum, one of:
```
'Interval' | 'Hour' | 'Day' | 'Month' | 'Year'
```
