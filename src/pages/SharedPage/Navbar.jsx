import { Link } from "react-router-dom";
import logo from "../../assets/short-logo.png"
import { useState } from "react";


const Navbar = () => {
	const [activeLink, setActiveLink] = useState('');

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	// make NavItems Component for optimizing code volume
	const NavItems = <>
		<li><Link style={{ color: activeLink === 'home' ? 'red' : 'black' }} onClick={() => handleLinkClick('home')} to="/">Home</Link></li>

		<li><Link style={{ color: activeLink === 'privacy' ? 'red' : 'black' }} onClick={() => handleLinkClick('privacy')} to='/privacy'>Privacy Policy</Link></li>

		<li><Link style={{ color: activeLink === 'terms' ? 'red' : 'black' }} onClick={() => handleLinkClick('terms')} to='/terms'>Terms Condition</Link></li>

		<li><Link style={{ color: activeLink === 'about' ? 'red' : 'black' }} onClick={() => handleLinkClick('about')} to='/about'>About Us</Link></li>

		<li><Link style={{ color: activeLink === 'contact' ? 'red' : 'black' }} onClick={() => handleLinkClick('contact')} to='/contact'>Contact Us</Link></li>

		<li><Link style={{ color: activeLink === 'advertise' ? 'red' : 'black' }} onClick={() => handleLinkClick('advertise')} to='/advertise'>Advertise</Link></li>

		<button className="btn bg-red-600 text-white text-lg">Join Now</button>
	</>

	return (
		<>
			<div className="navbar bg-base-100 h-48 mb-4 md:px-52 shadow-lg">
				<div className="navbar-center mx-auto">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{NavItems}
						</ul>
					</div>
					<Link to="/" className="text-xl">
						<img className="h-[80px]" src={logo} alt="" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu md:pe-52 menu-horizontal font-bold text-xl">
						{NavItems}
					</ul>
				</div>

			</div>
		</>
	);
};

export default Navbar;