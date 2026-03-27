import { UpgradeForm } from '@/features/Account';
import {
	BalancePerformanceChart,
	RecentActivity,
	TradeHistory,
	useDashboardData,
	WeeklyActivityChart,
} from '@/features/dashboard';
import { Inventory, useCalculateItem } from '@/features/inventory';
import { useLeaderboard } from '@/features/leaderboards';
import { PlayerProfile, PlayerStats } from '@/features/player';
import { BaseLayout, ContentLayout } from '@/layout';
import { TheLoaderDefault, TheLoaderSmall, TheTabContainer } from '@/shared';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function PlayerContent() {
	const player = useSelector((state) => state.player);
	const { currentPlayer: playerStats } = useLeaderboard();
	const { data, isLoading } = useCalculateItem({ id: player.id });
	const { data: tradeActivities, isLoading: isTradeLoading } = useDashboardData({
		id: player.id,
	});
	return (
		<BaseLayout>
			<ContentLayout>
				<div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
					{/* Profile cover - image - name  */}
					<PlayerProfile player={player} playerStats={playerStats} />
					<PlayerStats
						player={player}
						inventoryDetails={data.inventoryDetails}
						playerStats={playerStats}
						tradeStats={tradeActivities.tradeStats}
					/>
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
									<BalancePerformanceChart />
									<WeeklyActivityChart />
									{isTradeLoading ? (
										<TheLoaderSmall />
									) : (
										<RecentActivity data={tradeActivities.tradeHistory} />
									)}
								</div>
							</TheTabContainer>

							<input type='radio' name='my_tabs_6' className='tab' aria-label='Inventory' />
							<TheTabContainer>
								{isLoading ? (
									<TheLoaderDefault />
								) : (
									<Inventory
										items={data.itemDetails}
										inventoryDetails={data.inventoryDetails}
									/>
								)}
							</TheTabContainer>

							<input
								type='radio'
								name='my_tabs_6'
								className='tab'
								aria-label='Trade History'
							/>
							<TheTabContainer>
								<TradeHistory data={tradeActivities.tradeHistory} />
							</TheTabContainer>
						</div>
					</div>
				</div>
			</ContentLayout>
		</BaseLayout>
	);
}

export default PlayerContent;
