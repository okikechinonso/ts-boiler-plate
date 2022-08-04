"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
function build() {
    const router = (0, fastify_1.default)({
        logger: true,
    });
    (0, routes_1.makeRoute)(router);
    return router;
}
exports.build = build;
