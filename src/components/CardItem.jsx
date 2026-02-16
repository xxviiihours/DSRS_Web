import React from 'react';

function CardItem() {
	return (
		<div className='card card-side card-border bg-base-100 shadow-sm'>
			<figure>
				<img
					src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
					alt='Movie'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>item name</h2>
				<p>Item description</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy</button>
					<button className='btn btn-primary'>Sell</button>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
