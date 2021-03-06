import { Specification } from "../model/specification"
import { SpecificationRepository } from "./implementations/SpecificationRepository"

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationRepository {

    create( { name, description } : ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export { ISpecificationRepository, ICreateSpecificationDTO }