import { InventoryItem } from '@/features/inventory';
import { BaseLayout, ContentLayout } from '@/layout';
import React from 'react';
import { useSelector } from 'react-redux';

function InventoryContent() {
	const inventory = useSelector((state) => state.player.inventoryItems);
	console.log(inventory);
	return (
		<BaseLayout>
			<ContentLayout>
				<div className='divider'>Inventory</div>
				<div className='grid grid-rows-6 lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
					{inventory.map((_, index) => (
						<InventoryItem key={index} />
					))}
				</div>
				<div className='divider'>Market</div>
				<div className='grid grid-rows-3 lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
					test
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default InventoryContent;
