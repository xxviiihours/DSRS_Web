import React from 'react';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';
import { BaseLayout, ContentLayout } from '@/layout';
import { ItemMain, useInitDailyPricesQuery } from '@/features/market';
import { PriceHistoryChart, RecentBuyers, RecentSellers } from '@/features/dashboard';

function HomeContent() {
	const player = useSelector((state) => state.player);
	const item = useSelector((state) => state.item);

	const { data: prices, isFetching } = useInitDailyPricesQuery(
		player?.id ? { id: player.id } : skipToken,
	);

	return (
		<BaseLayout>
			<ContentLayout>
				<div className='grid grid-rows-3 lg:grid-rows-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2'>
					<PriceHistoryChart player={player} item={item} />
					<ItemMain prices={prices?.dailyPrices} isFetching={isFetching} />
					<RecentBuyers isFetching={isFetching} />
					<RecentSellers isFetching={isFetching} />
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default HomeContent;
