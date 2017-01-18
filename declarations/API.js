declare type SampleTime = 'Interval' | 'Hour' | 'Day' | 'Month' | 'Year';
declare type TimeFrame = 'Today' | 'Yesterday' | 'Last3Days' | 'Last7Days' | 'MonthToDate' | 'LastMonth' | 'YearToDate' | 'LastYear' | 'Custom';
declare type Query = {
  timeFrame: TimeFrame,
  sampleTime: ?SampleTime,
  startDateTime: ?string,
  endDateTime: ?string
};

