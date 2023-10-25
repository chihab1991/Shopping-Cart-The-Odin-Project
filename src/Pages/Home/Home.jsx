import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<>
			<main className="home">
				<div className="container">
					<h1>Welcome</h1>
					<p>To Chihab's newest online Store.</p>
					<p>
						Here you can find marvelous collection of clothes and electronics..
					</p>
					<p>
						To Check Our Store's collection please click{" "}
						<Link to={"/shop"}>Here</Link>
					</p>
				</div>
			</main>
		</>
	);
};

export default Home;
