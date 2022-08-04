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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const serve_1 = require("./api/http/serve");
const app = (0, serve_1.build)();
const port = process.env.PORT || "3000";
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        app.listen({ host: "0.0.0.0", port: Number.parseInt(port) });
    });
}
start().catch((err) => {
    console.log("failed to start server", err);
    process.exit(1);
});
