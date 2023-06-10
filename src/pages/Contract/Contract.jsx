import { Link } from "react-router-dom";
import useTitle from "../../useTitle";

const Contract = () => {
	useTitle("Contract");
	return (
		<div className="p-10">
			<h1 className="text-6xl font-semibold">Contact Us</h1>
			<div className="text-xl py-4">
				<p className="py-2">If you want to contact us: you can send an email to <Link className="text-blue-500 py-2">contact.deshcareer@gmail.com</Link></p>
				<p className="py-2">If you want to meet with us, you can come to our office based on an appointment. </p>
				<p className="py-2">Our Office address:</p>
				<p className="py-2">House: 13/3,</p>
				<p className="py-2">Road: 2,</p>
				<p className="py-2">Shyamoly, Dhaka-1207</p>
				<p className="py-2">+8801880811047</p>
			</div>
		</div>
	);
};

export default Contract;