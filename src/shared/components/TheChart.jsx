import React from 'react';

function TheChart({ children }) {
	return (
		<div className='card w-full max-h-[clamp(450px,40vh,900px)] bg-base-100 border-2 border-base-300 row-start-1 col-start-1 col-span-full lg:col-span-4'>
			<div className='card-body flex flex-col h-full min-h-0'>{children}</div>
		</div>
	);
}

export default TheChart;
