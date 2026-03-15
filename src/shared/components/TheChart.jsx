import React from 'react';

function TheChart({ children }) {
	return (
		<div className='card w-full h-auto bg-base-100  border-2 border-base-300 row-start-1 col-start-1 col-span-full'>
			<div className='card-body rechart-wrapper'>{children}</div>
		</div>
	);
}

export default TheChart;
