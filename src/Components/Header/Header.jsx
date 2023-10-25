import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.css";
const Header = ({ cart }) => {
	return (
		<>
			<header className="header">
				<nav className="container navbar">
					<div className="nav-left">
						<Link to="/">
							<h2>Chihab's Store</h2>
						</Link>
					</div>
					<div className="nav-right">
						<ul>
							<li>
								<Link to={"/shop"}>Shop</Link>
							</li>
							<li>
								<Link to={"/cart"}>
									<FaCartShopping />
									{cart.length === 0 ? "" : `: ${cart.length}`}
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
