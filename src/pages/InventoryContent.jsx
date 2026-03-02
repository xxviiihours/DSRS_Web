import { InventoryItem } from '@/features/inventory';
import { ItemMarket, useInitDailyPricesQuery } from '@/features/market';
import { BaseLayout, ContentLayout } from '@/layout';
import React from 'react';
import { useSelector } from 'react-redux';

function InventoryContent() {
	const { id, inventoryItems } = useSelector((state) => state.player);
	const { data, isFetching } = useInitDailyPricesQuery(id ? { id: id } : skipToken);
	return (
		<BaseLayout>
			<ContentLayout>
				<div className='divider'>Inventory</div>
				<div className='grid grid-rows-6 lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
					{inventoryItems?.map((item, index) => (
						<InventoryItem key={index} data={item} />
					))}
				</div>
				<div className='divider'>Market</div>
				<div className='grid grid-rows-1 lg:grid-rows-1 grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-2'>
					{data?.dailyPrices?.map((dailyPrice, index) => (
						<ItemMarket key={index} data={dailyPrice} />
					))}
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default InventoryContent;
