import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";





const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateCategoryUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };