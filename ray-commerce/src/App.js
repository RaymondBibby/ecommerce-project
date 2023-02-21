import { useState } from 'react';
import './App.css';
import { BasketContext } from './contexts/basket';
import { UserContext } from './contexts/user';
import Banner from './components/Banner';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
	const [basket, setBasket] = useState([]);
	const [user, setUser] = useState('Demo User');

	return (
		<BasketContext.Provider value={{ basket, setBasket }}>
			<UserContext.Provider value={{ user, setUser }}>
				<div>
					<Banner />
					{/* <Routes>
						<Route />
						<Route />
						<Route />
						<Route />
					</Routes> */}
				</div>
			</UserContext.Provider>
		</BasketContext.Provider>

		// Create components

		// -> Context & State

		// Implement browser router
		// -> Choose paths and pass components to routes

		// Create Sub components
		// -> Blog, banner, pc's, banner, sorting bar
		// -> state (Blogs)
	);
}

export default App;
