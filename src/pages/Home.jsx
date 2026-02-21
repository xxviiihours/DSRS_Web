import React, { useEffect, useRef } from 'react';
import TheMenuDock from '../components/TheMenuDock';
import TheChart from '../components/TheChart';
import MainItem from '../features/Item/ui/MainItem';
import RecentBuyers from '../features/buyers/ui/RecentBuyers';
import RecentSellers from '../features/sellers/ui/RecentSellers';
import MainContent from '../layout/MainContent';
import HeaderContent from '../layout/HeaderContent';
import FooterContent from '../layout/FooterContent';

function Home() {
	const data = [
		{
			name: 'Page A',
			uv: 5400,
			pv: -2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 4300,
			pv: -4567,
			amt: 2400,
		},
		{
			name: 'Page A',
			uv: 1400,
			pv: -2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3200,
			pv: -4567,
			amt: 2400,
		},
		{
			name: 'Page A',
			uv: 1400,
			pv: -2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3200,
			pv: -4567,
			amt: 2400,
		},
	];

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

			{/* main content */}
			<MainContent>
				<TheChart data={data} />
				<MainItem />
				<RecentBuyers />
				<RecentSellers />
			</MainContent>

			{/* leaderboards panel */}
			<div className='bg-base-100 row-start-4 col-span-full lg:col-span-1 lg:row-start-2 lg:row-end-3 content-center text-center'>
				leaderboards
			</div>

			<TheMenuDock />
			{/* footer */}
			<FooterContent />
		</div>
	);
}

export default Home;
