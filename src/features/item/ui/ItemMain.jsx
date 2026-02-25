import React, { useEffect, useRef, useState } from 'react';
import TheLoaderInfo from '../../../components/TheLoaderInfo';
import { useDispatch } from 'react-redux';
import { setItem } from '../model/itemSlice';
import image from '../../../assets/images/fantasy_item_6.png';
import { currencyFormat } from '../../../utils/valueFormatter';
import TransactionForm from '../../market/ui/TransactionForm';

function ItemMain({ prices, isFetching }) {
	const dispatch = useDispatch();
	const carouselRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const totalSlides = prices?.length;

	const goto = (index) => {
		if (carouselRef.current) {
			const width = carouselRef.current.offsetWidth;
			carouselRef.current.scrollTo({
				left: width * index,
				behavior: 'smooth',
			});
			setCurrentSlide(index);
		}

		dispatch(setItem(prices[index].item));
	};

	const nextItem = () => goto((currentSlide + 1) % totalSlides);
	const prevItem = () => goto((currentSlide - 1 + totalSlides) % totalSlides);

	useEffect(() => {
		if (prices?.length > 0) {
			console.log('triggered');
			dispatch(setItem(prices[0].item));
		}
	}, [prices, dispatch]);

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
								<figure>
									<img src={image} className='w-150' alt='Shoes' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										<p className='font-bold'>{currencyFormat(price.price)}</p>
										{price.state === 0 && <div className='badge badge-success ml-2'>LOW</div>}
										{price.state === 1 && <div className='badge badge-error ml-2'>HIGH</div>}
									</h2>
									<h3 className='opacity-60'>
										Base Price:{' '}
										<span className='line-through'>
											{currencyFormat(price.item.basePrice)}
										</span>
									</h3>
									<h3 className='font-semibold'>{price.item.name}</h3>
									<p className='italic line-clamp-3'>{price.item.description}</p>
									<div className='card-actions justify-between mt-4'>
										{currentSlide === index && <TransactionForm data={price} />}
									</div>
								</div>
							</>
						)}
					</div>

					{/* Navigation buttons inside the card */}
					<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 p-2'>
						<div className='absolute top-1 left-2 right-2 flex justify-between transform -translate-y-1/2'>
							<button onClick={prevItem} className='btn btn-circle btn-info btn-ghost'>
								❮
							</button>
							<button onClick={nextItem} className='btn btn-circle btn-info btn-ghost'>
								❯
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ItemMain;
