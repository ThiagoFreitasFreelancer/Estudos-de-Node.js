import { Specification } from "../model/specification"
import { SpecificationRepository } from "./SpecificationRepository"

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationRepository {

    create( { name, description } : ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO }