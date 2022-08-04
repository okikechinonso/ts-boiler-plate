import { RouteHandler } from "fastify";
import { UpgradeCustomerKYCToLevel3 } from "../../../services/customer/upgrade-kyc-level-3";
import { upgradeCustomerKYCToLevel3Schema } from "../schema/customer.shcema";
import { container } from "tsyringe";
import { Static } from "@sinclair/typebox";
export class CustomerController {
  metaMapWebHook: RouteHandler<
    Static<typeof upgradeCustomerKYCToLevel3Schema>
        > = async (request, res) => {
    const upgradeCustomerlevel = container.resolve(UpgradeCustomerKYCToLevel3);
    await upgradeCustomerlevel.execute({
      userId: 1,
      status: request.body.status as string,
      eventName: request.body.eventName,
    });
    return res.send("Successfull");
  };
}
