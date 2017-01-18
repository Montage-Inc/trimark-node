declare type TrimarkSiteInput = {
  SiteId: number,
  Name: string,
  Type: string
};

declare type Site = {
  id: number,
  name: string,
  type: string,
  points: Array<Point> | null,
  getPoints: Function
};
