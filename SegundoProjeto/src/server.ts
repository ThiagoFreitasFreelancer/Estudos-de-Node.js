import express, { request, response } from "express";
import { creatCourse } from "./routes";

const app = express();

app.listen(3333);

app.get("/", creatCourse);