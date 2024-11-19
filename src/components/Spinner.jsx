import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const overide = {
	display: 'block',
	margin: ' 100px auto',
};
const Spinner = ({loading}) => {
	return (
		<ClipLoader
			color="#338ca"
			loading={loading}
			cssOveride={overide}
			size={150}
		/>
	);
};

export default Spinner;
