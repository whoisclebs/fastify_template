import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	outDir: "build",
	sourcemap: true,
	clean: true,
	dts: true,
	minify: false,
	target: "es2024",
});
