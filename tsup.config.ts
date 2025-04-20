import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/main/index.ts"],
	format: ["esm"],
	outDir: "build",
	sourcemap: true,
	clean: true,
	dts: true,
	minify: false,
	target: "esnext",
	tsconfig: "tsconfig.json",
});
