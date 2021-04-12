// @ts-nocheck
import { Point } from '../src/point';

describe('Point', () => {
    it('should not fail to be created', () => {
        expect(new Point(0, 0).toString()).toEqual('(0, 0)');
        expect(new Point(1, 2).toString()).toEqual('(1, 2)');
    });

    it('should calculate distance to other points', () => {
        expect(new Point(3, 4).distance(7, 7)).toEqual(5);
        expect(new Point(1, 2).distance(new Point(-1, 2))).toEqual(2);
    });

    it('should calculate distance to center if no point is provided', () => {
        expect(new Point(3, 4).distance()).toEqual(5);
    });
});
