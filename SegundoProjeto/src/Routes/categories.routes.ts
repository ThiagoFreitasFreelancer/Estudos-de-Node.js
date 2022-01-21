import {  Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepositories";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoryreposiories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    
    const all = categoryreposiories.list()


    return response.json({ "list" : all });

})

export { categoriesRoutes };