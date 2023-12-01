// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import setupMock from './mock';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), setupMock()],
});
