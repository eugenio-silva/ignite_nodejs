import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  
  create({ description, name }: ICreateSpecificationDTO): void 
  findByname(name: string): Specification
}

export { ICreateSpecificationDTO, ISpecificationsRepository }