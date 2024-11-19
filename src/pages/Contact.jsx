import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';
const Contact = () => {
	return (
		<div className="bg-gray-900 text-white min-h-screen p-6">
			<div className="max-w-4xl mx-auto">
				<section className="bg-gray-800 p-6 rounded-lg shadow mb-8">
					<h2 className="text-2xl text-center font-semibold mb-6">
						My Social Media Links
					</h2>
					<div className="flex space-x-4 justify-center">
						<a
							href="https://github.com/hassan3xl"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400">
							<FaGithub size={60} />
						</a>
						<a
							href="https://linkedin.com/in/hassan"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400">
							<FaLinkedin size={60} />
						</a>
						<a
							href="https://twitter.com/elhassanesaid01"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400">
							<FaTwitter size={60} />
						</a>
						<a
							href="https://instagram.com/hassan3xl"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-gray-400">
							<FaInstagram size={60} />
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Contact;
