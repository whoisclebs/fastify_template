import fp from "fastify-plugin";
import compress from "@fastify/compress";

export default fp(async (app) => {
	app.register(compress, {
		global: true,
		inflateIfDeflated: true,
		threshold: 1024,
	});
});
