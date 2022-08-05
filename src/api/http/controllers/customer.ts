import { RouteHandler } from "fastify";
import { UpgradeCustomerKYCToLevel3 } from "../../../services/customer/upgrade-kyc-level-3";

import { SignUpSchema, upgradeCustomerKYCToLevel3Schema } from "../schema/customer.shcema";
import { container } from "tsyringe";
import { Static } from "@sinclair/typebox";
import { SignUp } from "../../../services/customer/sign-up";
import { Customer } from "@prisma/client";
export class CustomerController {
  metaMapWebHook: RouteHandler<
    Static<typeof upgradeCustomerKYCToLevel3Schema>
        > = async (request, res) => {
    const upgradeCustomerlevel = container.resolve(UpgradeCustomerKYCToLevel3);
    await upgradeCustomerlevel.execute({
      userId: 1,
      status: request.body.status as string,
      eventName: request.body.eventName,
      payload: request.body
    });
    return res.send("Successfull");
  };
  create: RouteHandler<
    Static<typeof SignUpSchema>
        > = async (request, res) => {
    const signUp = container.resolve(SignUp);
    const data = await signUp.execute(request.body.name);
    return res.send({
        messsage: "create",
        data: data
    });
  };
}
