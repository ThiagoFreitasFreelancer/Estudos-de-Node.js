import { Category } from "../model/category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICateroriesRepository {

    findByName(name: string): Category;
    list(): Category[];
    create({name, description} : ICreateCategoryDTO ): void;

}

export { ICateroriesRepository, ICreateCategoryDTO };