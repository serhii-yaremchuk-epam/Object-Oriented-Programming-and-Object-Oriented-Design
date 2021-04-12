export class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    if (isNaN(x) || isNaN(y)) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x = x;
      this.y = y;
    }
  }

  toString(): string {
    return `(${this.x}, ${this.y})`
  }

  distance(): number;
  distance(other: Point): number;
  distance(x: number, y: number): number;
  distance(x?: Point | number, y?: number): number {
    const point1 = this;
    let point2: Point;

    if (!x) {
      point2 = new Point();
    } else if(x instanceof Point) {
      point2 = x;
    } else {
      point2 = new Point(x, y);
    }

    return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2));
  }
}
