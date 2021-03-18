import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext.js';
import CartContext from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<CartContext.Provider value={{ cart }}>
				<Navigation />

				{/* Routes */}
				<Route exact path="/">
					<ProductContext.Provider value={{ products, addItem }}>
						<Products />
					</ProductContext.Provider>
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
