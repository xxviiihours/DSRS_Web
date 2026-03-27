import { InventoryItem, useCalculateItem } from '@/features/inventory';
import { ItemMarket } from '@/features/market';
import { PlayerStats } from '@/features/player';
import { BaseLayout, ContentLayout } from '@/layout';
import { TheLoaderInfo, TheSearchForm } from '@/shared';
import {
	faBoxesStacked,
	faGridHorizontal,
	faList,
	faStore,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function InventoryContent() {
	const player = useSelector((state) => state.player);
	const { calculatedItems, calculatedItemState } = useCalculateItem({ id: player.id });
	const { itemDetails, marketDetails } = calculatedItems;

	const [viewMode, setViewMode] = useState('grid');

	return (
		<BaseLayout>
			<ContentLayout>
				<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-2'>
					<PlayerStats />
					<div className='tabs tabs-box col-span-full'>
						<label className={`tab`}>
							<input type='radio' name='my_tabs_6' defaultChecked />
							<FontAwesomeIcon icon={faBoxesStacked} className='mr-1' />
							My Inventory
						</label>
						<div className='tab-content bg-base-100 border-base-300 p-2 min-h-165'>
							<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
								<div className='col-span-2 content-center'>
									<TheSearchForm />
								</div>
								<div className='text-right space-x-2'>
									<button
										className={`btn-outline btn btn-sm ${viewMode === 'grid' ? 'bg-info border-info text-white' : ''}`}
										onClick={() => setViewMode('grid')}
									>
										<FontAwesomeIcon icon={faGridHorizontal} />
									</button>
									<button
										className={`btn-outline btn btn-sm ${viewMode === 'list' ? 'bg-info border-info text-white' : ''}`}
										onClick={() => setViewMode('list')}
									>
										<FontAwesomeIcon icon={faList} />
									</button>
								</div>
								{calculatedItemState.isLoading ? (
									<TheLoaderInfo />
								) : (
									<>
										{itemDetails.length > 0 ? (
											itemDetails.map((item, index) => (
												<InventoryItem key={index} data={item} type={'sell-only'} />
											))
										) : (
											<div className='grid col-span-full text-center h-full content-center'>
												<h6>NO ITEMS AVAILABLE</h6>
											</div>
										)}
									</>
								)}
							</div>
						</div>

						<label className='tab'>
							<input type='radio' name='my_tabs_6' />
							<FontAwesomeIcon icon={faStore} className='mr-1' />
							Marketplace
						</label>
						<div className='tab-content bg-base-100  py-2'>
							<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2'>
								<div className='col-span-2 content-center px-2'>
									<TheSearchForm />
								</div>
								<div className='text-right space-x-2 px-2'>
									<button
										className={`btn-outline btn btn-sm ${viewMode === 'grid' ? 'bg-info border-info text-white' : ''}`}
										onClick={() => setViewMode('grid')}
									>
										<FontAwesomeIcon icon={faGridHorizontal} />
									</button>
									<button
										className={`btn-outline btn btn-sm ${viewMode === 'list' ? 'bg-info border-info text-white' : ''}`}
										onClick={() => setViewMode('list')}
									>
										<FontAwesomeIcon icon={faList} />
									</button>
								</div>
							</div>

							{calculatedItemState.isLoading ? (
								<TheLoaderInfo />
							) : (
								<div className={'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'}>
									{marketDetails?.map((dailyPrice, index) => (
										<ItemMarket key={index} data={dailyPrice} />
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default InventoryContent;
