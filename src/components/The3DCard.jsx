import React from 'react';

function The3DCard({ children }) {
	return (
		<a className='hover-3d mx-2 cursor-pointer'>
			{children}
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</a>
	);
}

export default The3DCard;
