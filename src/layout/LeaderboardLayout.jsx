import React from 'react';

function LeaderboardLayout({ children }) {
	return (
		// <div className='bg-base-100 row-start-4 col-span-full lg:col-span-1 lg:row-start-2 lg:row-end-3'>
		// 	{children}
		// </div>
		<div className='bg-base-100 row-start-4 col-span-full lg:col-span-1 lg:row-start-2 lg:row-end-3'>
			{children}
		</div>
	);
}

export default LeaderboardLayout;
