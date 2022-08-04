import { prisma } from "../../lib/db";
import { PrismaClient, Customer } from "@prisma/client";
import { ICustomerRepository } from "./repository";

export class CustomerRepository implements ICustomerRepository {
  constructor(public dbClient: PrismaClient = prisma) {}

  async update(customer: Customer): Promise<Customer> {
    return await this.dbClient.customer.update({
      where: {
        id: customer.id,
      },
      data: {
        ...customer,
        kyc: customer.kyc
      }
    });
  }
  async find(id: number): Promise<Customer | null> {
    return await this.dbClient.customer.findUnique({
        where: {
            id 
        },
    });
}
}
