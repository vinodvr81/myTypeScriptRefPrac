"use strict";
//class names in typescript usually starts with capital letter
exports.__esModule = true;
exports.TrialExport = void 0;
var TrialExport = /** @class */ (function () {
    function TrialExport(x, y) {
        this.x = x;
        this.y = y;
    }
    TrialExport.prototype.addMul = function () {
        console.log(this.x + this.y);
        console.log(this.x * this.y);
    };
    TrialExport.prototype.subDiv = function () {
        console.log(this.x - this.y);
        console.log(this.x / this.y);
    };
    return TrialExport;
}());
exports.TrialExport = TrialExport;
