import { useState } from 'react';

import './App.css';
import MyRoutes from './routers/MyRoutes';

function App() {
	return (
		<div>
			<header>
				<h1 className='title'>🎬Peliculas</h1>
			</header>
			<MyRoutes />
		</div>
	);
}

export default App;
