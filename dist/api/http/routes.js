"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRoute = void 0;
const cors_1 = __importDefault(require("@fastify/cors"));
const customer_1 = require("./controllers/customer");
const makeRoute = (fastify) => {
    fastify.register(cors_1.default);
    fastify.register(customerRoute);
};
exports.makeRoute = makeRoute;
function customerRoute(router) {
    return __awaiter(this, void 0, void 0, function* () {
        const customerHandler = new customer_1.CustomerController();
        router.route({
            url: "/metamap/webhook",
            method: "POST",
            handler: customerHandler.metaMapWebHook,
        });
    });
}
