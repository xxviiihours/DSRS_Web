import { currencyFormat, The3DCard } from '@/shared';
import React from 'react';
import image from '@/assets/images/fantasy_item_3.png';

function InventoryItem({ data }) {
	return (
		<>
			<The3DCard>
				<div className='card w-auto bg-base-100 card-xs shadow-sm'>
					<figure>
						<img src={image} className='w-100' alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>{data.item.name}</h2>
						<p className='italic'>{data.item.description}</p>
						<span>Original Price: {currencyFormat(data.item.basePrice)}</span>
						<span className='text-right'>Quantity: {data.quantity}</span>
					</div>
				</div>
			</The3DCard>
		</>
	);
}

export default InventoryItem;
