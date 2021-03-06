import {  Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory/Index";
import { importCategoryController } from "../modules/cars/useCases/importCategory/Index";
import { listCategoryController } from "../modules/cars/useCases/listCategories/Index";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
   return listCategoryController.handler(request, response); 
});

categoriesRoutes.post(("/import"), upload.single("file"), (request, response) => {

    return importCategoryController.handler(request, response);
});

export { categoriesRoutes };