import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepositories";
import { ImportCategoryController } from "./importCategoryCrontroller";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

const categoryRepository = CategoriesRepository.getIntance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export{ importCategoryController }