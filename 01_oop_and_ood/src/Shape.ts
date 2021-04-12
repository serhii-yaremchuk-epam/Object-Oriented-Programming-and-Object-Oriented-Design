import {Point} from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color: string = 'green', filled: boolean = true) {
    if (points.length < 3) {
      throw new Error('Shape should has at least 3 points');
    }

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString() {
    const filled: string = this.filled ? 'filled' : 'not filled';
    return `A Shape with color of ${this.color} and ${filled}. Points: ${this.points.join(', ')}.`
  }

  getPerimeter(): number {
    return this.points.reduce((sum: number, point, index) => {
      let point2: Point;
      if (index === 0) {
        point2 = this.points[this.points.length - 1];
      } else {
        point2 = this.points[index - 1];
      }

      return sum + point.distance(point2);
    }, 0);
  }

  abstract getType(): string;
}
