import { FaRegEnvelope } from 'react-icons/fa';
import useTitle from '../../useTitle';
const Home = () => {

	useTitle("Home");
	return (
		<div className='p-10 md:pe-96'>
			<h1 className="text-6xl font-semibold ">Get Smarter about your <br /> career</h1>
			<h5 className="text-xl py-4">Get the <strong>5-minute newsletter</strong> keeping about smart career</h5>


			<div className='relative'>
				<div className="relative">
					<input type="email" name='email' className="w-full p-6 px-16 shadow-lg appearance-none border-0 focus:outline-none focus:ring-0  bg-white rounded md:text-xl" placeholder="Your E-mail address" required />
					<input type='submit' value="Join free" className="absolute top-4 md:top-2 right-2 md:py-4 py-2 rounded-lg bg-red-600 hover:bg-red-800 text-white md:text-xl font-medium px-1  md:px-16  normal-case"></input>
				</div>
				<FaRegEnvelope className='absolute top-8 left-2'></FaRegEnvelope>
			</div>

			<h5 className="text-xl pt-8">We are committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</h5>
		</div>
	);
};

export default Home;