import CartItem from "../../Components/CartItem/CartItem";
import { useState, useEffect } from "react";

import "./index.css";

const Cart = ({ cart, setCart }) => {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		const getTotal = () => {
			let sum = 0;
			cart.map((cartItem) => {
				sum += cartItem.price * cartItem.quantity;
			});
			setTotal(sum.toFixed(2));
		};
		getTotal();
	}, [cart]);
	return (
		<>
			<div className="shop-grid container">
				{cart.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						cart={cart}
						setCart={setCart}
						setTotal={setTotal}
					/>
				))}
			</div>
			<div className="total container">
				<h1>
					Total = <span>{total} $</span>
				</h1>
			</div>
		</>
	);
};

export default Cart;
