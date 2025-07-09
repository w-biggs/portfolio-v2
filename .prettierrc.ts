import { type Config } from 'prettier';

const config: Config = {
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	singleQuote: true,
	semi: true,
	useTabs: true,
	trailingComma: 'none'
};

export default config;
