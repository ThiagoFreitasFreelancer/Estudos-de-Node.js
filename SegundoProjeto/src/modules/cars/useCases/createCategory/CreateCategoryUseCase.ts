import { ICateroriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoryreposiories: ICateroriesRepository){ }

    execute( {name, description}: IRequest): void {

        const categoryAlreadyExists = this.categoryreposiories.findByName(name);

        if(categoryAlreadyExists){
           throw new Error('Category already exists');
        }

        this.categoryreposiories.create({name, description});

    }

}

export { CreateCategoryUseCase }