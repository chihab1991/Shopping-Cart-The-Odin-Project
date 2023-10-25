import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Layout = ({ cart }) => {
	return (
		<>
			<Header cart={cart} />
			<Outlet />
		</>
	);
};

export default Layout;
