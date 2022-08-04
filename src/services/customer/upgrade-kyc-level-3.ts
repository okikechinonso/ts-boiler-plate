import { inject, injectable, delay } from "tsyringe";
import { ICustomerRepository, CustomerRepository } from "../../domain/customer";

type MetamapWebhookInput = {
  userId: number;
  status: string;
  eventName: string;
};

@injectable()
export class UpgradeCustomerKYCToLevel3 {
  constructor(
    @inject(delay(() => CustomerRepository))
    public customerRepo: ICustomerRepository
  ) {}

  async execute(cmd: MetamapWebhookInput): Promise<void> {
    if (
      cmd.eventName === "verification_completed" &&
      cmd.status === "verified"
    ) {
      const customer = await this.customerRepo.find(cmd.userId);

      if (customer) {
        customer.kyc = 3;
        await this.customerRepo.update(customer);
      }
    }
  }
}
