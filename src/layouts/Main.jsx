import { Outlet } from "react-router-dom";
import Navbar from "../pages/SharedPage/Navbar";
import Footer from "../pages/SharedPage/Footer";

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className='min-h-[calc(100vh-500px)] max-w-screen-xl mx-auto'>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;