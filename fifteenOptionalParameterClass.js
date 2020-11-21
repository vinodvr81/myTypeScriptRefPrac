//optional parameters for the object of a class
var OptionalParameter = /** @class */ (function () {
    function OptionalParameter(x, y) {
        this.x = x;
        this.y = y;
    }
    OptionalParameter.prototype.showP = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return OptionalParameter;
}());
var op = new OptionalParameter();
op.showP();
var pp = new OptionalParameter(10, 100);
pp.showP();
