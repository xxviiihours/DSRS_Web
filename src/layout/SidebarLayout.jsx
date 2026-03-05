import React from 'react';

function SidebarLayout({ children }) {
	return (
		<div className='bg-base-100 row-start-3 col-span-full lg:col-span-1 lg:row-start-2  p-2'>
			{children}
		</div>
	);
}

export default SidebarLayout;
