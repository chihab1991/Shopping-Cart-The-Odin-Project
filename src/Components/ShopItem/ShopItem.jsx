import { FaPlus, FaMinus } from "react-icons/fa6";
import "./index.css";
import { useState } from "react";

const ShopItem = ({ item, cart, setCart }) => {
	const [quantity, setQuantity] = useState(0);
	const handleClick = () => {
		let checkItem = false;

		cart.map((cartItem) => {
			if (cartItem.title === item.title) checkItem = true;
		});

		if (!checkItem && item.quantity > 0) setCart([...cart, item]);
	};

	const handlePlusSign = () => {
		setQuantity(quantity + 1);
		item.quantity = quantity + 1;
	};
	const handleMinusSign = () => {
		if (quantity === 0) return;
		setQuantity(quantity - 1);
		item.quantity = quantity - 1;
	};
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
					<button onClick={handleClick}>Add to Cart</button>
				</div>
			</div>
		</>
	);
};

export default ShopItem;
