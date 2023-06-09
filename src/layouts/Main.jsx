import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPage/Navbar";
import Footer from "../pages/SharedPage/Footer";

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;