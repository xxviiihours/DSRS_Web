import { The3DCard } from '@/shared';
import React from 'react';

function InventoryItem() {
	return (
		<The3DCard>
			<div className='card w-auto bg-base-100 card-xs shadow-sm'>
				<div className='card-body'>
					<h2 className='card-title'>Xsmall Card</h2>
					<p>A card component has a figure, a body part,</p>
				</div>
			</div>
		</The3DCard>
	);
}

export default InventoryItem;
