import React from 'react';

function TheLoaderInfo() {
	return (
		<div className='flex w-full h-full flex-col gap-4 p-4'>
			<div className='skeleton h-50 w-full'></div>
			<div className='skeleton h-4 w-28'></div>
			<div className='skeleton h-4 w-full'></div>
			<div className='skeleton h-4 w-full'></div>
		</div>
	);
}

export default TheLoaderInfo;
