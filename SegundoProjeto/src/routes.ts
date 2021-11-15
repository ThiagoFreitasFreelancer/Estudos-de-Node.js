import { Request, Response } from "express";
import CreatCourseService from "./CreatCourseService";

export function creatCourse( request: Request, response: Response){

    CreatCourseService.execute({
        name: "NodeJs",
        educator: "Thiago",
        duration: 10
    });

    CreatCourseService.execute({
        name: "React.js",
        educator: "Thiago",
    });

    return response.send();
}