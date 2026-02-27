import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
	plugins: ['import'],
	rules: {
		// 🚫 Disallow deep relative imports like ../../../
		'no-restricted-imports': [
			'error',
			{
				patterns: ['../../*', '../../../*', '!@/*'],
			},
		],

		// 📦 Import sorting
		'import/order': [
			'warn',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
					},
				],
				'newlines-between': 'always',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
