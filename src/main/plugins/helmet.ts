import fp from "fastify-plugin";
import fastifyHelmet from "@fastify/helmet";

export default fp(async (app) => {
	app.register(fastifyHelmet);
});
