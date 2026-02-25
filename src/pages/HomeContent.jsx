import React, { useEffect, useRef, useState } from 'react';
import { BaseLayout, ContentLayout } from '../layout';
import { useInitDailyPricesQuery } from '../features/market/api/marketApi';
import ItemMain from '../features/item/ui/ItemMain';
import RecentBuyers from '../features/buyers/ui/RecentBuyers';
import RecentSellers from '../features/sellers/ui/RecentSellers';
import { useSelector } from 'react-redux';
import { skipToken } from '@reduxjs/toolkit/query';
import PriceHistoryChart from '../features/dashboard/ui/PriceHistoryChart';

function HomeContent() {
	const player = useSelector((state) => state.player);
	const item = useSelector((state) => state.item);

	const { data: prices, isFetching } = useInitDailyPricesQuery(
		player?.id ? { id: player.id } : skipToken,
	);
	return (
		<>
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
		</>
	);
}

export default HomeContent;
