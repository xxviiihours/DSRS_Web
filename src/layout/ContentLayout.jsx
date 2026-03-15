import React from 'react';

function ContentLayout({ children }) {
	return (
		<div className='bg-base-100 row-start-2 col-start-1 lg:col-start-2 col-span-3 '>
			{children}
		</div>
	);
}

export default ContentLayout;
