import {Link} from 'react-router-dom';
import hassane from '../assets/images/hassane.jpg';

const HeroSection = () => {
	return (
		<>
			<div className="bg-gray-900 text-white flex items-center justify-center">
				<img
					width={245}
					height={245}
					src={hassane}
					alt="Hassan"
					className="rounded-full object-cover border-4 border-indigo-500 shadow-lg"
				/>
			</div>
			<div className="bg-gray-900 text-white flex items-center justify-center">
				<div className="text-center max-w-2xl px-4 py-6">
					{/* Main Heading */}
					<h2 className="text-4xl sm:text-6xl font-bold leading-tight">
						Hassan Saidu
					</h2>
					{/* Subheading */}
					<p className="text-gray-400 mt-4 sm:mt-6 text-lg sm:text-xl">
						A passionate software developer building amazing digital
						experiences with Django and React.
					</p>
					{/* Call-to-Action */}
					<div className="mt-8">
						<Link
							to="https://x.com/elhassanesaid01"
							target="_blank"
							className=" hover:bg-gray-800 text-white py-3 px-3 m-2 rounded-lg shadow-md font-semibold ">
							Twitter
						</Link>
						<Link
							to=""
							target="_blank"
							className=" hover:bg-gray-800 text-white py-3 px-3 m-2 rounded-lg shadow-md font-semibold ">
							Linkedin
						</Link>
						<Link
							to="https://github.com/hassan3xl
"
							target="_blank"
							className=" hover:bg-gray-800 text-white py-3 px-3 m-2 rounded-lg shadow-md font-semibold ">
							Github
						</Link>
						<Link
							to="/resume"
							className=" hover:bg-gray-800 text-white py-3 px-3 m-2 rounded-lg shadow-md font-semibold ">
							Resume
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
