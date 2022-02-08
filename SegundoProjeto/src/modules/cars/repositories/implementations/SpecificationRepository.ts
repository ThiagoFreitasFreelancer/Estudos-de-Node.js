import { Specification } from "../../model/specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{

    private specifications : Specification[];

    private static INSTANCE : SpecificationRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance(){
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository;
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at : new Date()
        })

        this.specifications.push(specification);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const specification =  this.specifications.find( specification => specification.name === name )
        return specification;
    }

}

export { SpecificationRepository };