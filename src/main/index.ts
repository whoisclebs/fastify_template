const startServer = async () => {
	const { setupApp } = await import("./config/app");
	const app = await setupApp();
	try {
		await app.listen({ port: 3000 });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

startServer();
