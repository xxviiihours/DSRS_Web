import React, { useEffect, useRef, useState } from 'react';
import TheLoaderInfo from '../../../components/TheLoaderInfo';
import { useDispatch } from 'react-redux';
import { setItem } from '../model/itemSlice';

function ItemMain({ prices, isFetching }) {
	const dispatch = useDispatch();
	const carouselRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);

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
					<div className='card bg-base-100 w-full h-full'>
						{isFetching ? (
							<TheLoaderInfo />
						) : (
							<>
								<figure>
									<img
										src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
										// className='w-max'
										alt='Shoes'
									/>
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										Current Price: ${price.price}
										{price.state === 0 && <div className='badge badge-success ml-2'>LOW</div>}
										{price.state === 1 && <div className='badge badge-error ml-2'>HIGH</div>}
									</h2>
									<h3 className='opacity-60'>Base Price: ${price.item.basePrice}</h3>
									<h3 className='font-semibold'>{price.item.name}</h3>
									<p className='italic'>{price.item.description}</p>
									<div className='card-actions justify-end mt-4'>
										<button className='btn btn-success btn-soft'>Buy</button>
										<button className='btn btn-error btn-soft'>Sell</button>
									</div>
								</div>
							</>
						)}
					</div>

					{/* Navigation buttons inside the card */}
					<div className='absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/3 p-2'>
						<div className='absolute top-1 left-2 right-2 flex justify-between transform -translate-y-1/2'>
							<button onClick={prevItem} className='btn btn-circle'>
								❮
							</button>
							<button onClick={nextItem} className='btn btn-circle'>
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
