import config from "@/main/config/env";

const startServer = async () => {
	const { setupApp } = await import("./config/app");
	const app = await setupApp();
	try {
		await app.listen({ port: config.PORT });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

startServer();
