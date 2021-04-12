// @ts-nocheck
import { Triangle } from '../src/Triangle';
import { Point } from '../src/Point';

describe('Triangle', () => {
    it('should be able to create instance of Triangle', () => {
        expect(() => new Triangle(new Point(0, 0), new Point(0, 3), new Point(4, 3))).not.toThrow();
    });

    it("should return required string", () => {
        expect(
            new Triangle(
                new Point(0, 0),
                new Point(7, 0),
                new Point(3, 8),
            ).toString()
        ).toBe("Triangle[v1=(0, 0),v2=(7, 0),v3=(3, 8)]");
    });

    it('should tell if the triangle is equilateral', () => {
        // Considering it's impossible to create an equilateral triangle with points with integer coordinates,
        // use proper comparison of floating point numbers to find out if they are the same.
        // E.g. 0.2 + 0.4 will equal to 0.6000000000000001 in JavaScript, but in our case
        // 0.2 + 0.4 should equal 0.6
        expect(new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 5.196)).getType()).toBe('equilateral triangle');
    });

    it('should tell if the triangle is isosceles', () => {
        expect(new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 8)).getType()).toBe('isosceles triangle');
    });

    it('should tell if the triangle is scalene', () => {
        expect(new Triangle(new Point(0, 0), new Point(7, 0), new Point(3, 8)).getType()).toBe('scalene triangle');
    });
});
