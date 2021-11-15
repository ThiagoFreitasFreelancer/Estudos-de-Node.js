"use strict";
/**
 * name - strig
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreatCourseService = /** @class */ (function () {
    function CreatCourseService() {
    }
    CreatCourseService.prototype.execute = function (_a) {
        var name = _a.name, _b = _a.duration, duration = _b === void 0 ? 8 : _b, educator = _a.educator;
        console.log(name, duration, educator);
    };
    return CreatCourseService;
}());
exports.default = new CreatCourseService;
