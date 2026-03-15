import { currencyFormat, The3DCard } from '@/shared';
import React from 'react';
import image from '@/assets/images/fantasy_item_3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { TransactionForm } from '@/features/market';

function InventoryItem({ data, type }) {
	return (
		<div className='card w-auto h-100 bg-base-100 border-2 border-base-300 card-xs'>
			{/* <The3DCard> */}
			<figure>
				<img src={image} width={'100%'} alt='Shoes' />
			</figure>
			{/* </The3DCard> */}
			<div className='card-body'>
				<h2 className='card-title mb-2'>{data?.item?.name}</h2>
				<div className='grid grid-cols-2'>
					<span>Quantity:</span>
					<span className='text-right'>{data?.quantity}x</span>
				</div>
				<div className='grid grid-cols-2'>
					<span>Original Price:</span>
					<span className='text-right'>{currencyFormat(data?.item?.basePrice)}</span>
				</div>
				<div className='grid grid-cols-2'>
					<span>Current Price:</span>
					<span className='text-right font-bold'>{currencyFormat(data?.currentPrice)}</span>
				</div>
				<div
					className={`grid grid-cols-2 p-2 ${data.profit < 0 ? 'bg-error/20' : 'bg-success/20'}`}
				>
					<span className='text-white'>PnL:</span>
					<span
						className={`text-right font-bold ${data.profit < 0 ? 'text-error' : 'text-success'}`}
					>
						{currencyFormat(data.profit)}
						<br />
						{data.profit < 0 ? (
							<FontAwesomeIcon icon={faArrowTrendDown} />
						) : (
							<FontAwesomeIcon icon={faArrowTrendUp} />
						)}{' '}
						({data.percent}%)
					</span>
				</div>
				<div className='card-actions mt-4'>
					<TransactionForm data={data} type={type} />
				</div>
			</div>
		</div>
	);
}

export default InventoryItem;
