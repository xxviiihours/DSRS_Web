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

function PlayerStats({ player, value }) {
	return (
		<>
			<div className='stat bg-base-300 col-span-1 rounded-2xl'>
				<div className='stat-figure text-info'>
					<FontAwesomeIcon icon={faSackDollar} size='2xl' />
				</div>
				<div className='stat-title'>Total Balance</div>
				<div className='stat-value'>{currencyFormat(player?.balance)}</div>
				<div className='stat-desc text-error opacity-60'>
					<FontAwesomeIcon icon={faArrowTrendDown} /> 90 (14%)
				</div>
			</div>
			<div className='stat bg-base-300 col-span-1 rounded-2xl'>
				<div className='stat-figure text-info'>
					<FontAwesomeIcon icon={faMoneyBillTrendUp} size='2xl' />
				</div>
				<div className='stat-title'>Total Profit</div>
				<div className='stat-value'>{currencyFormat(player?.balance)}</div>
				<div className='stat-desc'>from past 7 sales</div>
			</div>
			<div className='stat bg-base-300 col-span-1 rounded-2xl'>
				<div className='stat-figure text-info'>
					<FontAwesomeIcon icon={faBoxesStacked} size='2xl' />
				</div>
				<div className='stat-title'>Inventory Value</div>
				<div className='stat-value'>{currencyFormat(value)}</div>
				<div className='stat-desc text-success opacity-60'>
					<FontAwesomeIcon icon={faArrowTrendUp} /> 90 (14%) unrealized
				</div>
			</div>
			<div className='stat bg-base-300 col-span-1 rounded-2xl'>
				<div className='stat-figure text-info'>
					<FontAwesomeIcon icon={faMedal} size='2xl' />
				</div>
				<div className='stat-title'>Achievements</div>
				<div className='stat-value'>4/10</div>
				<div className='stat-desc text-purple-500 opacity-60'>(66%) completed</div>
			</div>
		</>
	);
}

export default PlayerStats;
