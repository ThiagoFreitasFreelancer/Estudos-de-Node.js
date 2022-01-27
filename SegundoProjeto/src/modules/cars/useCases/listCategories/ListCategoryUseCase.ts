import { Category } from "../../model/category";
import { ICateroriesRepository } from "../../repositories/ICategoriesRepository";




class ListCategoryUseCase{

    constructor(private categoryreposiories: ICateroriesRepository){ }

    execute(): Category[] {

        const categories = this.categoryreposiories.list();

        return categories;
    }
}

export { ListCategoryUseCase };