import { InventoryItem } from '@/features/inventory';
import { currencyFormat } from '@/shared';
import React from 'react';

function Inventory({ items, value }) {
	return (
		<div className='p-3'>
			<h3 className='font-bold'>Your Inventory</h3>
			<span className='font-bold text-xs opacity-60'>
				{items.length} {items.length > 1 ? 'Items' : 'Item'} - Total value:{' '}
				{currencyFormat(value)}
			</span>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 grid-rows-1'>
				{items.map((item, index) => (
					<InventoryItem key={index + 1} data={item} />
				))}
			</div>
		</div>
	);
}

export default Inventory;
