import { Customer } from "@prisma/client";
import { inject, injectable, delay } from "tsyringe";
import { ICustomerRepository, CustomerRepository } from "../../domain/customer";



@injectable()
export class SignUp {
  constructor(
    @inject(delay(() => CustomerRepository))
    public customerRepo: ICustomerRepository
  ) {}

  async execute(cmd: string): Promise<Customer | null> {
    
      return await this.customerRepo.create(cmd);
  }
}