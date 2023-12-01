// mock/index.js
import { createServer } from 'vite-plugin-mock';

export function setupMock() {
	return createServer({
		// Configura tus rutas de mock aquí
		'/api': (req, res) => {
			res.json({
				message: 'Hello from the mock API!',
			});
		},
	});
}
