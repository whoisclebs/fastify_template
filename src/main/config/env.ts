import "dotenv/config";
import z from "zod";

const envSchema = z.object({
	RATE_LIMIT: z
		.object({
			MAX: z
				.string()
				.transform((val) => parseInt(val, 10))
				.default("100"),
			TIME_WINDOW: z
				.string()
				.transform((val) => parseInt(val, 10))
				.default("60000"),
		})
		.default({}),
	PORT: z
		.string()
		.transform((val) => parseInt(val, 10))
		.default("3000"),
	DATABASE_URL: z.string().min(1),
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
	console.error("Invalid environment variables", _env.error.format());
	throw new Error("Invalid environment variables");
}

export default _env.data;
export type EnvType = z.infer<typeof envSchema>;
