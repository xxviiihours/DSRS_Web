import FooterLayout from '@/layout/FooterLayout';
import HeaderLayout from '@/layout/HeaderLayout';
import { TheHeader, TheMenuDock } from '@/shared';
import React from 'react';

function BaseLayout({ children }) {
	return (
		<div className='bg-base-200 grid grid-cols-3 lg:grid-cols-5 auto-rows-max  gap-2'>
			{/* header */}
			<HeaderLayout>
				<TheHeader />
			</HeaderLayout>

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
			<FooterLayout />
			<TheMenuDock />
		</div>
	);
}

export default BaseLayout;
