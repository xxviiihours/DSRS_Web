import { Top20Players } from '@/features/leaderboards';
import { LeaderboardLayout, SidebarLayout } from '@/layout';
import FooterLayout from '@/layout/FooterLayout';
import HeaderLayout from '@/layout/HeaderLayout';
import { TheHeader, TheMenuDock, TheTab } from '@/shared';
import React from 'react';

function BaseLayout({ children }) {
	return (
		<div className='bg-base-100 grid grid-cols-3 lg:grid-cols-5 auto-rows-max  gap-2'>
			{/* header */}
			<HeaderLayout>
				<TheHeader />
			</HeaderLayout>

			{/* sidebar */}
			<SidebarLayout>
				<TheTab />
			</SidebarLayout>

			{/* Main Content renders here based on Active page */}
			{children}

			{/* leaderboards panel */}
			<LeaderboardLayout>
				<Top20Players />
			</LeaderboardLayout>

			{/* footer */}
			<FooterLayout />
			<TheMenuDock />
		</div>
	);
}

export default BaseLayout;
