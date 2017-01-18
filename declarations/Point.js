declare type TrimarkPointInput = {
  PointId: number,
  Name: string,
  UnitOfMeasure: string,
  DisplayName: string
};

declare type Point = {
  siteId: number,
  id: number,
  name: string,
  uom: string,
  displayName: string,
  history: Function
};
