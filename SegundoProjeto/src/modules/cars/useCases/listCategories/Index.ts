import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


const categoryRepositories = CategoriesRepository.getIntance();
const listCatergoryUseCase = new ListCategoryUseCase(categoryRepositories);
const listCategoryController = new ListCategoryController(listCatergoryUseCase);


export { listCategoryController }