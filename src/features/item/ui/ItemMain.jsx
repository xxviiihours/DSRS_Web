import React from 'react';

function ItemMain() {
	return (
		<div className='card bg-base-100 col-span-full md:col-span-full lg:col-span-2 h-100'>
			<figure>
				<img
					src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>
					$100.00
					<div className='badge badge-error'>LOW</div>
				</h2>
				<p>Sample content with price tag</p>
				<div className='card-actions justify-end mt-4'>
					<button className='btn btn-success btn-soft'>Buy</button>
					<button className='btn btn-error btn-soft'>Sell</button>
				</div>
			</div>
		</div>
	);
}

export default ItemMain;
