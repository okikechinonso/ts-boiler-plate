import { inject, injectable, delay } from "tsyringe";
import { ICustomerRepository, CustomerRepository } from "../../domain/customer";

type MetamapWebhookInput = {
  userId: number;
  status: string;
  eventName: string;
  payload: unknown;
};

@injectable()
export class UpgradeCustomerKYCToLevel3 {
  constructor(
  ) {}

  async execute(cmd: MetamapWebhookInput): Promise<void> {
    if (
      cmd.eventName === "verification_completed" &&
      cmd.status === "verified"
    ) {
      // const customer = await this.customerRepo.find(cmd.userId);
      console.log(cmd.payload);
    }
  }
}
