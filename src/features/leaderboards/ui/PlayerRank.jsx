import { currencyFormat } from '@/shared';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function PlayerRank({ currentPlayer }) {
	return (
		<div className='gap-4 border-base-content/50 border-2 justify-center grid lg:grid-cols-2 md:grid-cols-2'>
			<div className='stat col-span-full md:col-span-1 lg:col-span-1'>
				<div className='stat-title'>
					<span>Your Rank </span>
					<span className='text-success text-xs opacity-60'>
						<FontAwesomeIcon icon={faArrowTrendUp} /> (+20%)
					</span>
				</div>
				<div className='stat-value'>
					<span className='text-primary'>#{currentPlayer?.rank}</span>
				</div>
				<span className='text-xs opacity-60 italic text-primary'>Keep trading!</span>
			</div>
			<div className='stat justify-end'>
				<div className='stat-title'>Account balance</div>
				<div className='stat-value text-info'>
					{currencyFormat(currentPlayer?.totalBalance)}
				</div>
			</div>
		</div>
	);
}

export default PlayerRank;
