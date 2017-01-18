import { expect } from 'chai';

import Point from '../../lib/resources/Point';

const rawPoint = {
  PointId: 1,
  Name: 'Test Point',
  UnitOfMeasure: 'Foo',
  DisplayName: 'Bar'
};

const getData = function() {}

describe('Point', () => {
  describe('constructor', () => {
    const point = Point(getData, 60, rawPoint);

    it('sets the siteId', () => {
      expect(point.siteId).to.eql(60);
    });

    it('sets the id', () => {
      expect(point.id).to.eql(rawPoint.PointId);
    });

    it('sets the name', () => {
      expect(point.name).to.eql(rawPoint.Name);
    });

    it('sets the uom', () => {
      expect(point.uom).to.eql(rawPoint.UnitOfMeasure);
    });

    it('sets the displayName', () => {
      expect(point.displayName).to.eql(rawPoint.DisplayName);
    });
  });
});
