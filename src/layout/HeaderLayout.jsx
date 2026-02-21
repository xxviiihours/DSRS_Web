import React from 'react';

function HeaderLayout({ children }) {
	return (
		<div className='bg-base-100 row-start-1 col-span-full text-center content-center'>
			{children}
		</div>
	);
}

export default HeaderLayout;
