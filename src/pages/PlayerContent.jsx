import { InventoryItem, useCalculateItem } from '@/features/inventory';
import { PlayerProfile, PlayerStats } from '@/features/player';
import { BaseLayout, ContentLayout } from '@/layout';
import { currencyFormat } from '@/shared';
import React from 'react';
import { useSelector } from 'react-redux';

function PlayerContent() {
	const player = useSelector((state) => state.player);
	const { data, isLoading } = useCalculateItem({ id: player.id });
	return (
		<BaseLayout>
			<ContentLayout>
				<div className='grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
					{/* Profile cover - image - name  */}
					<PlayerProfile player={player} />
					<PlayerStats player={player} value={data.inventoryValue} />
					<div className='col-span-full'>
						<div className='tabs tabs-border'>
							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Overview'
								defaultChecked
							/>
							<div className='tab-content bg-base-100 p-2 overflow-auto  h-150'>Overview</div>
							<input type='radio' name='my_tabs_6' className='tab' aria-label='Inventory' />
							<div className='tab-content bg-base-100 p-4'>
								<h3 className='font-bold'>Your Inventory</h3>
								<span className='font-bold text-xs opacity-60'>
									{data.itemDetails.length} {data.itemDetails.length > 1 ? 'Items' : 'Item'} -
									Total value: {currencyFormat(data.inventoryValue)}
								</span>
								<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 grid-rows-1'>
									{data.itemDetails.map((inventory) => (
										<InventoryItem key={inventory.id} data={inventory} />
									))}
								</div>
							</div>

							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Trade History'
							/>
							<div className='tab-content bg-base-100 p-6 overflow-auto h-108'>
								Tab content 3
							</div>
							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Recent Activities'
							/>
							<div className='tab-content bg-base-100 p-6 overflow-auto h-108'>
								Recent Activities
							</div>
						</div>
					</div>
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default PlayerContent;
