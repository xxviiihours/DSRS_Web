import { currencyFormat, The3DCard, TheModal } from '@/shared';
import React, { useState } from 'react';
import image from '@/assets/images/fantasy_item_4.png';
import { PriceHistoryChart } from '@/features/dashboard';
import { useSelector } from 'react-redux';
import { TransactionForm } from '@/features/market';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

function ItemMarket({ data }) {
	const player = useSelector((state) => state.player);
	const [show, setShow] = useState(false);
	const isPositive = data.percentage >= 0;
	return (
		<>
			<The3DCard
				action={() => {
					setShow(true);
				}}
			>
				<div className='card w-auto bg-base-100 card-xs shadow-sm'>
					<figure>
						<img src={image} className='w-100' alt='Shoes' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title text-xs text-left mb-2'>{data.item.name} </h2>

						<p className='text-right font-semibold'>
							{currencyFormat(data.price)}{' '}
							<span
								className={`text-xs font-sans text-right ${isPositive ? 'text-success' : 'text-error'}`}
							>
								{isPositive ? (
									<>
										<FontAwesomeIcon icon={faArrowTrendUp} /> (+{data.percentage}%)
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faArrowTrendDown} /> ({data.percentage}%)
									</>
								)}
							</span>
						</p>

						<p className='text-right opacity-60'>
							Original Price:{' '}
							<span className='line-through'>{currencyFormat(data.item.basePrice)}</span>
						</p>
					</div>
				</div>
			</The3DCard>
			<TheModal show={show} onClose={() => setShow(false)} size='large'>
				<PriceHistoryChart player={player} item={data.item} />
				<div className='divider'></div>
				<div className='modal-action w-full'>
					<TransactionForm data={data} />
				</div>
			</TheModal>
		</>
	);
}

export default ItemMarket;
