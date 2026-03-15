import { InventoryItem, useCalculateItem } from '@/features/inventory';
import { ItemMarket } from '@/features/market';
import { BaseLayout, ContentLayout } from '@/layout';
import React from 'react';
import { useSelector } from 'react-redux';

function InventoryContent() {
	const player = useSelector((state) => state.player);
	const { data, isLoading } = useCalculateItem({ id: player.id });

	return (
		<BaseLayout>
			<ContentLayout>
				<div className='divider font-bold'>Inventory</div>
				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
					{data.itemDetails.length > 0 ? (
						data.itemDetails.map((item, index) => <InventoryItem key={index} data={item} />)
					) : (
						<div className='grid col-span-full text-center h-115 content-center'>
							<h6>NO ITEMS AVAILABLE</h6>
						</div>
					)}
				</div>
				<div className='divider font-bold'>Market</div>
				<div className='grid grid-rows-1 lg:grid-rows-1 grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-2'>
					{data.marketDetails?.map((dailyPrice, index) => (
						<ItemMarket key={index} data={dailyPrice} />
					))}
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default InventoryContent;
