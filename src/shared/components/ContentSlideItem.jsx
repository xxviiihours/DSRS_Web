import React from 'react';

function ContentSlideItem({ children }) {
	return (
		<div className='w-full shrink-0 snap-center bg-base-100 content-center'>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-2'>{children}</div>
		</div>
	);
}

export default ContentSlideItem;
