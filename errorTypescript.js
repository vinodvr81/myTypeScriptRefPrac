"use strict";
exports.__esModule = true;
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (msg) {
        console.log(msg);
    };
    Logger.prototype.error = function (msg) {
        console.error(msg);
    };
    Logger.prototype.warn = function (msg) {
        console.warn(msg);
    };
    return Logger;
}());
exports.Logger = Logger;
var dError = new Logger;
dError.error("This is the error");
dError.log("This is for the information");
dError.warn("This is for the warning");
