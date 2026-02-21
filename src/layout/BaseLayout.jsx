import React from 'react';
import HeaderContent from './HeaderLayout';
import TheMenuDock from '../components/TheMenuDock';
import FooterContent from './FooterLayout';

function BaseLayout({ children }) {
	return (
		<div className='bg-base-200 grid grid-cols-3 lg:grid-cols-5 auto-rows-max  gap-2'>
			{/* header */}
			<HeaderContent>
				<div className='flex'>
					<div className='size-10 flex-none content-center'>01</div>
					<div className='size-10 flex-none content-center'>01</div>
					<div className='size-10 grow content-center'>
						{/* <h1>Daily Stock Redistribution System</h1> */}
					</div>
					<div className='size-10 flex-none content-center'>03</div>
					<div className='size-10 flex-none content-center'>03</div>
				</div>
			</HeaderContent>

			{/* sidebar */}
			<div className='bg-base-100 row-start-3 col-span-full lg:col-span-1 lg:row-start-2 content-center text-center'>
				friend lists
			</div>

			{/* Main Content renders here based on Active page */}
			{children}

			{/* leaderboards panel */}
			<div className='bg-base-100 row-start-4 col-span-full lg:col-span-1 lg:row-start-2 lg:row-end-3 content-center text-center'>
				leaderboards
			</div>

			{/* footer */}
			<FooterContent />
			<TheMenuDock />
		</div>
	);
}

export default BaseLayout;
