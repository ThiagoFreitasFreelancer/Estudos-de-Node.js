import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



const categorisRepository = CategoriesRepository.getIntance();

const createCategoryUseCase = new CreateCategoryUseCase(categorisRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }