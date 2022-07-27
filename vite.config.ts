import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path'; // https://vitejs.dev/config/
export default defineConfig({
	root: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'), // map '@' to './src'
		},
	},
	plugins: [react()],
});
