import { EnvType } from "@/main/config/env";

declare module "fastify" {
	interface FastifyInstance {
		config: EnvType;
	}
}
