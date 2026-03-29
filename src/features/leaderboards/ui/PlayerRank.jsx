import { compactCurrency } from '@/shared';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function PlayerRank({ currentPlayer }) {
	return (
		<div className='gap-4 border-base-content/50 border-2 justify-center grid lg:grid-cols-2 md:grid-cols-2'>
			<div className='stat col-span-full md:col-span-1 lg:col-span-1'>
				<div className='stat-title'>
					<span>Your Rank </span>
					{currentPlayer.rankChangePercent === null && (
						<span className='badge badge-info badge-xs'>NEW</span>
					)}
					{currentPlayer.rankChangePercent > 0 && (
						<span className='text-success text-xs opacity-60'>
							<FontAwesomeIcon icon={faArrowTrendUp} /> ({currentPlayer.rankChangePercent}%)
						</span>
					)}
					{currentPlayer.rankChangePercent < 0 && (
						<span className='text-error text-xs opacity-60'>
							<FontAwesomeIcon icon={faArrowTrendDown} /> ({currentPlayer.rankChangePercent}%)
						</span>
					)}
				</div>
				<div className='stat-value'>
					<span className='text-base-content'>#{currentPlayer?.rank}</span>
				</div>
				<span className='text-xs opacity-60 italic text-base-content'>Keep trading!</span>
			</div>
			<div className='stat justify-end'>
				<div className='stat-title'>Account balance</div>
				<div className='stat-value text-info'>
					{compactCurrency(currentPlayer?.totalBalance)}
				</div>
			</div>
		</div>
	);
}

export default PlayerRank;
