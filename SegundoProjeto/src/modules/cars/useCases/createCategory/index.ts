import { CategoriesRepository } from "../../repositories/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



const categorisRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categorisRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }