import fp from "fastify-plugin";
import config from "@/main/config/env";

export default fp(async (app) => {
	app.decorate("config", config);
});
