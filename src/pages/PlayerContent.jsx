import { BalancePerformance, WeeklyActivities } from '@/features/dashboard';
import { Inventory, useCalculateItem } from '@/features/inventory';
import { PlayerProfile, PlayerStats } from '@/features/player';
import { BaseLayout, ContentLayout } from '@/layout';
import { TheLoaderDefault, TheTab, TheTabContainer } from '@/shared';
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
						<div className='tabs tabs-lift'>
							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Overview'
								defaultChecked
							/>
							<TheTabContainer>
								<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
									<div>
										<BalancePerformance />
									</div>
									<div>
										<WeeklyActivities />
									</div>
								</div>
							</TheTabContainer>
							<input type='radio' name='my_tabs_6' className='tab' aria-label='Inventory' />
							<TheTabContainer>
								{isLoading ? (
									<TheLoaderDefault />
								) : (
									<Inventory items={data.itemDetails} value={data.inventoryValue} />
								)}
							</TheTabContainer>

							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Trade History'
							/>
							<TheTabContainer>Trade History</TheTabContainer>
							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Recent Activities'
							/>
							<TheTabContainer>Recent Activities</TheTabContainer>
						</div>
					</div>
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default PlayerContent;
