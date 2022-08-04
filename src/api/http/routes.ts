import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { CustomerController } from "./controllers/customer";

export const makeRoute = (fastify: FastifyInstance) => {
    fastify.register(cors);
    fastify.register(customerRoute)
};

async function customerRoute(router: FastifyInstance) {
  const customerHandler = new CustomerController();
  router.route({
    url: "/metamap/webhook",
    method: "POST",
    handler: customerHandler.metaMapWebHook,
  });
  router.route({
    url: "/create",
    method: "POST",
    handler: customerHandler.create,
  });
}
