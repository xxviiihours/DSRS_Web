import { currencyFormat } from '@/shared';
import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TradeHistory() {
	return (
		<div className='col-span-full p-3'>
			<div className='mb-4'>
				<h3 className='font-bold'>Complete Trade History</h3>
				<span className='font-bold text-xs opacity-60'>All your past transactions</span>
			</div>
			{Array.from({ length: 15 }).map((_, index) => (
				<div
					key={index + 1}
					className='card w-full h-auto bg-base-100 border-2 border-base-300 my-2 flex flex-row content-center justify-between p-2'
				>
					<div className='grid grid-rows-2 grid-cols-2 content-center'>
						<div className='badge h-full badge-soft badge-error row-span-full'>
							<FontAwesomeIcon icon={faArrowTrendDown} size='xl' />
						</div>
						<span className='font-semibold'>{'test'}</span>
						<span className='text-sm opacity-60'>100% profit</span>
					</div>
					<div className='grid grid-rows-2 text-right content-center '>
						<span className='font-semibold'>{currencyFormat(1000)}</span>
						<span className='text-sm opacity-60'>100% profit</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default TradeHistory;
