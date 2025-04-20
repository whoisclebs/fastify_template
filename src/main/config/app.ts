import fastify, { FastifyInstance } from "fastify";
export const setupApp = async (): Promise<FastifyInstance> => {
	const app = fastify({ logger: true });
	app.register(import("@/main/plugins/env"));
	app.register(import("@/main/plugins/helmet"));
	app.register(import("@/main/plugins/cors"));
	app.register(import("@/main/plugins/rate-limit"));
	app.register(import("@/main/plugins/compress"));
	return app;
};
