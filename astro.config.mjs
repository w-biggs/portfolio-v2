// @ts-check
import { defineConfig, envField } from 'astro/config';
import { loadEnv } from "vite";

const { SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
	env: {
		schema: {
			SITE: envField.string({ context: "server", access: "public" })
		}
	},
	site: SITE,
	image: {
		responsiveStyles: true
	}
});
