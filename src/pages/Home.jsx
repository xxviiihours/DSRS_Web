import React, { useEffect, useRef } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import TheChart from '../components/TheChart';
import MainItem from '../features/Item/ui/MainItem';
import RecentBuyers from '../features/buyers/ui/RecentBuyers';
import RecentSellers from '../features/sellers/ui/RecentSellers';
import MainContent from '../layout/MainContent';

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
		<div className='bg-base-200 grid grid-cols-3 lg:grid-cols-5 grid-rows-1  gap-2'>
			{/* header */}
			<div className='bg-base-100 row-start-1 col-span-full text-center content-center'>
				<Header />
			</div>

			{/* sidebar */}
			<div className='bg-base-100 row-start-3 col-span-full lg:col-span-1 lg:row-start-2 content-center text-center'>
				sidebar
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
				rightbar
			</div>

			{/* footer */}
			<div className='bg-base-100 row-start-5 lg:row-start-3 col-span-full text-center content-center'>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
