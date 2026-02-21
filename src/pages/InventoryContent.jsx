import React from 'react';
import { BaseLayout, ContentLayout } from '../layout';
import InventoryItem from '../features/inventory/ui/InventoryItem';
import TheModal from '../components/TheModal';

function InventoryContent() {
	return (
		<BaseLayout>
			<ContentLayout>
				<TheModal />
				<div className='divider'>Inventory</div>
				<div className='grid grid-rows-6 lg:grid-rows-1 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
					{Array.from({ length: 6 }).map((_, index) => (
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
