import {NavLink, Link} from 'react-router-dom';
import logo from '../assets/images/hassanx.png';

const Navbar = () => {
	return (
		<nav className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
			{/* Logo */}
			<div className="text-xl font-bold">
				<NavLink to="/" className="hover:text-gray-400">
					<img
						className=" text-white"
						width={80}
						height={80}
						src={logo}
						alt=""
					/>
				</NavLink>
			</div>

			{/* Centered Navbar Items */}
			<ul className="flex space-x-8">
				<li>
					<NavLink to="about" className="hover:text-gray-400">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/projects" className="hover:text-gray-400">
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="hover:text-gray-400">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
