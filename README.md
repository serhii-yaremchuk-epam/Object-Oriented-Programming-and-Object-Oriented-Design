The Home Task must be done using Typescript.

1. Create a `Point` class, which creates 2 dimensional point with coordinates. It
   should contain:
    - two instance variables `x` and `y`;
    - default constructor which creates a point at the location of (0, 0);
    - overloaded constructor (use multiple constructors declaration for Typescript)
      which creates a point by `x` and `y` coordinates;
    - `toString()` method should return a `Point` class stringified representation in
      format: `"(x, y)"`;
    - `distance()` method should be overloaded (use multiple methods declaration for
      Typescript) with next implementations:
      - no args: distance from this point to (0, 0);
      - `distance(other: Point)` - distance from this point to a given instance of
        `Point`;
      - `distance(x, y)` - distance from this point to a given point (x, y).

2. Create abstract superclass called `Shape`, which contains:
    - two protected instance variables: `color` (string), `filled`
      (boolean) and `points` (Point[]);
    - overloaded constructor (use multiple constructors declaration for Typescript): a
      constructor that takes a list of `points` and initializes the color to `"green"`
      and filled to `true` by default, and a constructor that takes a list of `points`,
      the `color` and `filled` properties;
    - Make sure that the `Shape` has at least 3 points (2 points is just a line).
    - `toString()` method that returns `"A Shape with color of xxx and filled/Not
     filled. Points: (x1, y1), (x2, y2)..."`;
    - `getPerimeter()` that calculates the perimeter using `Point.distance` method;

3. Create class `Triangle` that takes 3 points as it's vertices. Triangle must inherit
   `Shape` abstract class. `Triangle` should contain:

    - a constructor (use multiple constructors declaration for Typescript) which creates
      `Triangle` class using three instances of `Point` class, may also provide color and
      filled properties;
    - override `toString()` method, it should return a `Triangle` class stringified
      representation in format `"Triangle[v1=(x1, y1),v2=(x2, y2),v3=(x3, y3)]"`;
    - override `getType()` method, which prints `"equilateral triangle"` if all the three
      sides are equal, `"isosceles triangle"` if any two of the three sides are equal, or
      `"scalene triangle"` if all sides are different.

### Evaluation Criteria

[2]. All tasks are implemented partially or two tasks are not implemented at all.  
[3]. One task is not implemented at all, or two tasks have major issues (e.g. missing a
     method, doesn't throw an error when it should).  
[4]. One of the tasks doesn't have a major part of it implemented.  
[5]. All tasks are implemented to a full extend.

