import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./CartItem.css";

const CartItem = ({ item, cart, setCart, setTotal }) => {
	const [quantity, setQuantity] = useState(item.quantity);

	const handleClick = () => {
		let newCart = cart.filter((cartItem) => cartItem.title != item.title);
		setCart(newCart);
	};
	const handlePlusSign = () => {
		setQuantity(quantity + 1);
		console.log(quantity + 1);
		item.quantity = quantity + 1;
	};
	const handleMinusSign = () => {
		if (quantity === 0) return;
		setQuantity(quantity - 1);
		item.quantity = quantity - 1;
	};

	useEffect(() => {
		const getTotal = () => {
			let sum = 0;
			cart.map((cartItem) => {
				sum += cartItem.price * cartItem.quantity;
			});
			setTotal(sum.toFixed(2));
		};
		getTotal();
	}, [item.quantity, cart]);
	return (
		<>
			<div className="shop-el">
				<img src={item.image} alt={item.title} />
				<h3>{item.title}</h3>
				<p>${item.price}</p>
				<div className="quantity">
					<div>
						<FaMinus onClick={handleMinusSign} />

						<input
							type="number"
							name="quantity"
							id="quantity"
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value);
							}}
						/>
						<FaPlus onClick={handlePlusSign} />
					</div>
					<button onClick={handleClick} className="remove-btn">
						Remove Item
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
