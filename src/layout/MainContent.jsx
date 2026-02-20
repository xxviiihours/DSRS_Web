import React from 'react';

function MainContent({ children }) {
	return (
		<div className='bg-base-200 row-start-2 col-start-1 lg:col-start-2 col-span-3 content-center'>
			<div className='grid grid-rows-3 lg:grid-rows-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2'>
				{children}
			</div>
		</div>
	);
}

export default MainContent;
