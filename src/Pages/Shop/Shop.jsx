import ShopItem from "../../Components/ShopItem/ShopItem";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

import "./index.css";

const Shop = ({ loading, shopItems, error, cart, setCart }) => {
	return (
		<>
			<main className="container">
				<div className="shop-grid">
					{loading && <Loading />}
					{shopItems &&
						shopItems.map((item) => (
							<ShopItem
								key={item.id}
								item={item}
								cart={cart}
								setCart={setCart}
							/>
						))}
					{error && <Error />}
				</div>
			</main>
		</>
	);
};

export default Shop;
