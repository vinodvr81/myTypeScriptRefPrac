//class names in typescript usually starts with capital letter
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.show = function () {
        console.log(this.x, this.y);
    };
    return Point;
}());
var point = new Point(5, 19);
point.show();
