import "reflect-metadata";
import { build } from "./api/http/serve";

const app = build()

const port = process.env.PORT || "3000";

async function start() {
    app.listen({ host: "0.0.0.0", port: Number.parseInt(port) });
}

start().catch((err) => {
    console.log("failed to start server",err);
    process.exit(1)
})