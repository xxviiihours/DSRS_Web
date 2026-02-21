import React, { useEffect, useRef } from 'react';
import { BaseLayout, ContentLayout } from '../layout';
import TheChart from '../components/TheChart';
import ItemMain from '../features/item/ui/ItemMain';
import RecentBuyers from '../features/buyers/ui/RecentBuyers';
import RecentSellers from '../features/sellers/ui/RecentSellers';

function HomeContent() {
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
		<BaseLayout>
			<ContentLayout>
				<div className='grid grid-rows-3 lg:grid-rows-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2'>
					<TheChart data={data} />
					<ItemMain />
					<RecentBuyers />
					<RecentSellers />
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default HomeContent;
