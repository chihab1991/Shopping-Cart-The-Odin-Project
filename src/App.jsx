import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Layout from "./Pages/Layout/Layout";
import "./App.css";

function App() {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [shopItems, setShopItems] = useState(null);
	const loadShopItems = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		if (response.status === 200) {
			setLoading(false);
			setError(false);
			const data = await response.json();
			const items = data.map((item) => {
				if (item) return { ...item, quantity: 0 };
			});
			setShopItems(items);
		}
		if (response.status >= 400) {
			setLoading(false);
			setError(true);
		}
	};
	useEffect(() => {
		loadShopItems();
	}, []);
	const router = createBrowserRouter([
		{
			element: <Layout cart={cart} />,
			children: [
				{
					element: <Home />,
					path: "/",
				},
				{
					path: "/shop",
					element: (
						<Shop
							setCart={setCart}
							cart={cart}
							loading={loading}
							error={error}
							shopItems={shopItems}
						/>
					),
				},
				{
					path: "/cart",
					element: <Cart cart={cart} setCart={setCart} />,
				},
			],
		},
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
