import { FaEnvelope } from 'react-icons/fa';
const Home = () => {
	return (
		<div>
			<h1 className="text-7xl font-bold pt-4">Get Smarter about your <br /> career</h1>
			<h5 className="text-2xl py-4">Get the <strong>5-minute newsletter</strong> keeping about smart career</h5>
				
					<input className='absolute py-12 text-xl w-1/2 shadow-xl px-8 md:px-16 input' type="text" name="" placeholder='Your E-mail address' id=""  />
				
				
					<FaEnvelope className='relative top-5 left-4'></FaEnvelope>
				

			<div className='text-end relative right-52'>
					<button className="btn bg-red-600 px-12  text-white text-lg">Free Join</button>
				</div>
			


			<h5 className="text-2xl py-4">We are committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</h5>
		</div>
	);
};

export default Home;