import { currencyFormat } from '@/shared';
import {
	faArrowTrendDown,
	faArrowTrendUp,
	faBoxesStacked,
	faMedal,
	faMoneyBillTrendUp,
	faSackDollar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function PlayerStats({ player, inventoryDetails, playerStats, tradeStats }) {
	return (
		<div className='col-span-full'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
				<div className='stat bg-base-100 rounded-2xl'>
					<div className='stat-figure text-info'>
						<FontAwesomeIcon icon={faSackDollar} size='2xl' />
					</div>
					<div className='stat-title'>Total Balance</div>
					<div className='stat-value'>{currencyFormat(player?.balance)}</div>
					<div className='stat-desc text-error opacity-60'>
						{playerStats?.rankChangePercent === null && (
							<span className='badge badge-info badge-xs'>NEW</span>
						)}
						{playerStats?.rankChangePercent > 0 && (
							<>
								<FontAwesomeIcon icon={faArrowTrendUp} /> ({playerStats.rankChangePercent}%)
							</>
						)}
						{playerStats?.rankChangePercent < 0 && (
							<>
								<FontAwesomeIcon icon={faArrowTrendDown} /> ({playerStats.rankChangePercent}%)
							</>
						)}
					</div>
				</div>
				<div className='stat bg-base-100 col-span-1 rounded-2xl'>
					<div className='stat-figure text-info'>
						<FontAwesomeIcon icon={faMoneyBillTrendUp} size='2xl' />
					</div>
					<div className='stat-title'>Total Profit</div>
					<div className='stat-value'>{currencyFormat(tradeStats.totalProfit)}</div>
					<div className='stat-desc'>from past {tradeStats.totalSales} sales</div>
				</div>
				<div className='stat bg-base-100 col-span-1 rounded-2xl'>
					<div className='stat-title'>Inventory Value</div>
					<div className='stat-value'>{currencyFormat(inventoryDetails?.totalValue)}</div>
					{inventoryDetails?.profit >= 0 ? (
						<div className='stat-desc text-success opacity-60'>
							<FontAwesomeIcon icon={faArrowTrendUp} /> +{inventoryDetails?.profit} unrealized
						</div>
					) : (
						<div className='stat-desc text-error opacity-60'>
							<FontAwesomeIcon icon={faArrowTrendDown} /> +{inventoryDetails?.profit}{' '}
							unrealized
						</div>
					)}
					<div className='stat-figure text-info col-start-2'>
						<FontAwesomeIcon icon={faBoxesStacked} size='2xl' />
					</div>
				</div>
				<div className='stat bg-base-100 col-span-1 rounded-2xl'>
					<div className='stat-figure text-info'>
						<FontAwesomeIcon icon={faMedal} size='2xl' />
					</div>
					<div className='stat-title'>Achievements</div>
					<div className='stat-value'>4/10</div>
					<div className='stat-desc text-purple-500 opacity-60'>(66%) completed</div>
				</div>
			</div>
		</div>
	);
}

export default PlayerStats;
