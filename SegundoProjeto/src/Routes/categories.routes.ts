import { response, Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepositories";
import { PostgresCategoriesRepository } from "../modules/cars/repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryreposiories = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    
    const createCategoryService = new CreateCategoryService(categoryreposiories);

    createCategoryService.execute({ name, description });

    return response.status(201).send()
});

categoriesRoutes.get("/", (request, response) => {
    
    const all = categoryreposiories.list()

    return response.json({ "list" : all });

})

export { categoriesRoutes };