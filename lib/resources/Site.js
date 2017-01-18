/* @flow */

import Point from './Point';

const Site = (
  getData: Function,
  site: TrimarkSiteInput
): Site => (
  {
    id: site.SiteId,
    name: site.Name,
    type: site.Type,
    points: null,
    getPoints: function(): void {
      getData(`sites/${this.id}/points`)
      .then(points => {
        this.points = points.map(point => Point(getData, this.id, point));
      });
    }
  }
);

export default Site;
