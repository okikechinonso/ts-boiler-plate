import fastify, { FastifyInstance } from "fastify";
import { makeRoute } from "./routes";

export function build (): FastifyInstance{
    const router = fastify({
        logger: true,
    });
    makeRoute(router)
    return router;
}