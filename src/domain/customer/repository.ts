import { Customer } from "@prisma/client";

export interface ICustomerRepository {
    update(params: Customer): Promise<Customer>
    find(id: number): Promise<Customer | null>
    create(data: string): Promise<Customer | null>
}