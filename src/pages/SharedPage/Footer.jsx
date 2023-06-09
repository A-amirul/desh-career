import { Link } from "react-router-dom";
import logo from "../../assets/short-logo.png"
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer className="bg-[#0F0D32] w-full">
			<div className="max-w-screen-xl mx-auto">
				<div className="footer footer-center  text-base-100 rounded">

					<div>
						<div className="grid grid-flow-col gap-4 pt-10">
							<Link><FaFacebook className="w-[25px] h-[25px] border-2"></FaFacebook></Link>
							<Link><FaYoutube className="w-[25px] h-[25px] border-2"></FaYoutube></Link>
							<Link><FaLinkedin className="w-[25px] h-[25px] border-2"></FaLinkedin></Link>
						</div>
					</div>

				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 p-10 bg-[#0F0D32] text-base-100">
					<div>
						<img className="h-[90px]" src={logo} alt="" />
						<p className="text-lg text-[#8C94B8]">Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM.</p>
					</div>
					<div className="flex flex-col mt-6 text-[#8C94B8] text-lg md:text-center">
						<span className="text-3xl text-white">Privacy And Terms</span>
						<Link className="link link-hover mt-10">Privacy Policy</Link>
						<a className="link link-hover">Terms Condition</a>
						<Link className="link link-hover">FAQ</Link>

					</div>
					<div className="flex flex-col mt-6 text-[#8C94B8] text-lg md:text-end">
						<span className="text-3xl text-white">Support</span>
						<Link className="link link-hover mt-10">Affiliate Link</Link>
						<Link className="link link-hover">Contact us</Link>
						<Link className="link link-hover">Advertise with us</Link>
					</div>
				</div>
				<div className="bg-[#0F0D32] text-base-100 rounded">
					<hr className="text-base-100" />
					<div className="md:flex md:justify-between  p-8">
						<p className="text-center">© 2023 Newsletter E-mail Service: All Copy right reserved</p>
						<div className="flex justify-center gap-4">
							<Link>Terms</Link>
							<Link>Cookie </Link>
							<Link>Policy</Link>
							<Link>Privacy</Link>
						</div>
					</div>
				</div>
			</div>
		
		</footer>
	);
};

export default Footer;