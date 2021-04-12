// @ts-nocheck
import { Shape } from '../src/Shape';
import { Point } from '../src/Point';

class TestShape extends Shape {}

describe('Shape', () => {
    const points = [new Point(0, 0), new Point(0, 3), new Point(4, 3)];

    it('should fail to be created with 2 points', () => {
        expect(() => new TestShape([new Point(0, 0), new Point(0, 3)])).toThrow();
    });

    it('should show it\'s color and filled property', () => {
        expect(new TestShape(points, 'blue', false).toString())
            .toBe('A Shape with color of blue and not filled. Points: (0, 0), (0, 3), (4, 3).');
        expect(new TestShape(points, 'mustard', true).toString())
            .toBe('A Shape with color of mustard and filled. Points: (0, 0), (0, 3), (4, 3).');
    });

    it('should have default color and filled property', () => {
        expect(new TestShape(points).toString()).toBe('A Shape with color of green and filled. Points: (0, 0), (0, 3), (4, 3).');
    });

    it('should calculate the perimeter', () => {
        expect(new TestShape(points).getPerimeter()).toBe(12);
    });
});
