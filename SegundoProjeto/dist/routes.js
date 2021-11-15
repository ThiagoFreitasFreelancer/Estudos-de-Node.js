"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatCourse = void 0;
var CreatCourseService_1 = __importDefault(require("./CreatCourseService"));
function creatCourse(request, response) {
    CreatCourseService_1.default.execute({
        name: "NodeJs",
        educator: "Thiago",
        duration: 10
    });
    CreatCourseService_1.default.execute({
        name: "React.js",
        educator: "Thiago",
    });
    return response.send();
}
exports.creatCourse = creatCourse;
