import React from 'react';

function ContentLayout({ children }) {
	return (
		// <div className='bg-base-300 row-start-2 col-start-1 lg:col-start-2 col-span-3'>
		// 	{children}
		// </div>
		<div className='bg-base-300 row-start-2 col-start-1 lg:col-start-2 col-span-3 h-full overflow-y-auto min-h-0 scrollbar-auto-hide pr-1 pl-2'>
			{children}
		</div>
	);
}

export default ContentLayout;
