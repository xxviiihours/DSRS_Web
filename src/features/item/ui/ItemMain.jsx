import React, { useRef } from 'react';
import TheLoaderInfo from '../../../components/TheLoaderInfo';
import image from '../../../assets/images/fantasy_item_6.png';
import { currencyFormat } from '../../../utils/valueFormatter';
import TransactionForm from '../../market/ui/TransactionForm';
import { useItemNavigation } from '../../../hooks/ItemNavigation';

function ItemNavigationSlider({ previousAction, nextAction }) {
	return (
		<>
			{/* Navigation buttons inside the card */}
			<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 p-2'>
				<div className='absolute top-1 left-2 right-2 flex justify-between transform -translate-y-1/2'>
					<button onClick={previousAction} className='btn btn-circle btn-info btn-ghost'>
						❮
					</button>
					<button onClick={nextAction} className='btn btn-circle btn-info btn-ghost'>
						❯
					</button>
				</div>
			</div>
		</>
	);
}

function ItemInfo({ data, children }) {
	return (
		<>
			<figure>
				<img src={image} className='w-150' alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					<p className='font-bold'>{currencyFormat(data.price)}</p>
					{data.state === 0 && <div className='badge badge-success ml-2'>LOW</div>}
					{data.state === 1 && <div className='badge badge-error ml-2'>HIGH</div>}
				</h2>
				<h3 className='opacity-60'>
					Base Price:{' '}
					<span className='line-through'>{currencyFormat(data.item.basePrice)}</span>
				</h3>
				<h3 className='font-semibold'>{data.item.name}</h3>
				<p className='italic line-clamp-3'>{data.item.description}</p>
				<div className='card-actions justify-between mt-4'>{children}</div>
			</div>
		</>
	);
}

function ItemMain({ prices, isFetching }) {
	const carouselRef = useRef(null);

	const { currentSlide, nextItem, prevItem } = useItemNavigation({
		data: prices,
		carouselRef,
	});

	return (
		<div
			ref={carouselRef}
			className='carousel w-full h-100 col-span-full md:col-span-full lg:col-span-2 relative'
		>
			{prices?.map((price, index) => (
				<div
					key={price.id}
					id={`slide${index + 1}`}
					className='carousel-item relative w-full h-full'
				>
					<div className='card card-side bg-base-100 w-full h-full'>
						{isFetching ? (
							<TheLoaderInfo />
						) : (
							<>
								<ItemInfo data={price}>
									{prices[index] !== null && <TransactionForm data={price} />}
								</ItemInfo>
							</>
						)}
					</div>
					<ItemNavigationSlider previousAction={prevItem} nextAction={nextItem} />
				</div>
			))}
		</div>
	);
}

export default ItemMain;
