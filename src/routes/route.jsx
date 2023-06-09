import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Privacy from "../pages/Home/Privacy";
import TermCondition from "../pages/Home/TermCondition";
import About from "../pages/Home/About";
import Contact from "../pages/Contact/Contact";
import Advertise from "../pages/Home/Advertise";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element:<Home></Home>,
			},
			{
				path: "/privacy",
				element:<Privacy></Privacy>
			},
			{
				path: "/terms",
				element:<TermCondition></TermCondition>
			},
			{
				path: "about",
				element:<About></About>
			},
			{
				path: "contact",
				element:<Contact></Contact>
			},
			{
				path: "/advertise",
				element:<Advertise></Advertise>
			}
		]
	},
]);

export default router;