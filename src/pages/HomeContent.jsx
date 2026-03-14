import React from 'react';
import { useSelector } from 'react-redux';
import { BaseLayout, ContentLayout } from '@/layout';
import { ItemMain } from '@/features/market';
import { PriceHistoryChart, RecentBuyers, RecentSellers } from '@/features/dashboard';

function HomeContent() {
	const player = useSelector((state) => state.player);
	const item = useSelector((state) => state.item);

	return (
		<BaseLayout>
			<ContentLayout>
				<div className='grid grid-rows-3 lg:grid-rows-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2'>
					<PriceHistoryChart player={player} item={item} />
					<ItemMain player={player} />
					<RecentBuyers />
					<RecentSellers />
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default HomeContent;
