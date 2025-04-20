import fp from "fastify-plugin";
import rateLimit from "@fastify/rate-limit";
import config from "@/main/config/env";

export default fp(async (app) => {
	app.register(rateLimit, {
		max: config.RATE_LIMIT.MAX,
		timeWindow: config.RATE_LIMIT.TIME_WINDOW,
	});
});
