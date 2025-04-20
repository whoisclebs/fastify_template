import fp from "fastify-plugin";
import fastifyCors from "@fastify/cors";

export default fp(async (app) => {
	app.register(fastifyCors, { origin: true });
});
