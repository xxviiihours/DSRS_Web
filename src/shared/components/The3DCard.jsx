import React from 'react';

function The3DCard({ children, action }) {
	const handleAction = () => {
		action();
	};
	return (
		<a className='hover-3d m-2 cursor-pointer' onClick={handleAction}>
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
