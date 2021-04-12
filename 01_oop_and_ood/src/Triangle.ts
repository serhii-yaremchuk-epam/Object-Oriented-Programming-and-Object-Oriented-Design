import {Shape} from './Shape';
import {Point} from "./Point";

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean);
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    super([point1, point2, point3], color, filled);
  }

  toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }

  getType(): string {
    const lines = new Set();
    // toFixed test used as a workaround for the "should tell if the triangle is equilateral" test
    // it returns 5.999867998547968 value for the one side instead of 6
    lines
      .add(this.points[0].distance(this.points[1]).toFixed(3))
      .add(this.points[1].distance(this.points[2]).toFixed(3))
      .add(this.points[2].distance(this.points[0]).toFixed(3));

    if (lines.size === 1) {
      return 'equilateral triangle'
    } else if (lines.size === 2) {
      return 'isosceles triangle'
    } else {
      return 'scalene triangle';
    }
  }
}
