import { currencyFormat, dateFormat, timeFormat } from '@/shared';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function RecentActivity({ data: tradeActivities }) {
	return (
		<div className='col-span-full mt-5 p-3'>
			<div className='mb-4'>
				<h3 className='font-bold'>Recent Activity</h3>
				<span className='font-bold text-xs opacity-60'>Your latest trades</span>
			</div>

			{tradeActivities?.map((x) => (
				<div
					key={x.transactionDate}
					className='card w-full h-auto bg-base-100 border-2 border-base-300 my-2 flex flex-row content-center justify-between p-2'
				>
					<div className='flex content-center'>
						{x.type === 0 ? (
							<div className='badge h-full w-20 badge-soft badge-success row-span-full mr-2 '>
								{/* <FontAwesomeIcon icon={faArrowTrendUp} size='xl' /> */}
								<span>Puchased</span>
							</div>
						) : (
							<div className='badge h-full w-20 badge-soft badge-error row-span-full mr-2 '>
								{/* <FontAwesomeIcon icon={faArrowTrendUp} size='xl' /> */}
								<span>Sold</span>
							</div>
						)}
						<span className='grid grid-rows-2 row-span-2'>
							<span className='font-semibold text-sm'>{x.itemName}</span>
							<span className='text-xs opacity-65 text-left'>
								<FontAwesomeIcon icon={faInfoCircle} size='xs' />{' '}
								{dateFormat(x.transactionDate)} at {timeFormat(x.transactionDate)}
							</span>
						</span>
					</div>
					<div className='text-right content-center '>
						{x.type === 0 ? (
							<span className='font-semibold text-error'>
								- {currencyFormat(x.priceTotal)}
							</span>
						) : (
							<span className='font-semibold text-success'>
								+ {currencyFormat(x.priceTotal)}
							</span>
						)}
					</div>
				</div>
			))}
		</div>
	);
}

export default RecentActivity;
