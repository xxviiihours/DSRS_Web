import React, { useEffect, useRef, useState } from 'react';
import { BaseLayout, ContentLayout } from '../layout';
import TheChart from '../components/TheChart';
import ItemMain from '../features/item/ui/ItemMain';
import RecentBuyers from '../features/buyers/ui/RecentBuyers';
import RecentSellers from '../features/sellers/ui/RecentSellers';
import { data as TempChartData } from '../temp/tempData';
import { useSelector } from 'react-redux';
import { useInitDailyPricesQuery } from '../features/market/api/marketApi';

function HomeContent() {
	const player = useSelector((state) => state.player);
	const { data, isFetching } = useInitDailyPricesQuery({ id: player.id });
	return (
		<>
			<BaseLayout>
				<ContentLayout>
					<div className='grid grid-rows-3 lg:grid-rows-1 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2'>
						<TheChart data={TempChartData} isFetching={isFetching} />
						<ItemMain prices={data?.dailyPrices} isFetching={isFetching} />
						<RecentBuyers isFetching={isFetching} />
						<RecentSellers isFetching={isFetching} />
					</div>
				</ContentLayout>
			</BaseLayout>
		</>
	);
}

export default HomeContent;
