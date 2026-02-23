import React from 'react';
import TheLoaderSmall from '../../../components/TheLoaderSmall';

function RecentSellers({ sellers, isFetching = true }) {
	return (
		<div className='card bg-base-100 col-span-1 md:col-span-2 lg:col-span-1 shadow-sm w-auto'>
			<div className='card-body p-0 pt-4'>
				<h2 className='card-title justify-center mb-4'>RECENT SELLERS</h2>
				{isFetching ? (
					<TheLoaderSmall />
				) : (
					<ul className='list overflow-auto h-70'>
						<li className='list-row'>
							<div className='list-col-grow'>
								<img
									className='size-12 rounded-box'
									src='https://img.daisyui.com/images/profile/demo/1@94.webp'
								/>
								<div className=' font-semibold'>Zesty Six Seven</div>
								<div className='opacity-60 text-xs'>$100.00</div>
							</div>
							<div className='grid grid-cols-1 grid-rows-1'>
								<p className='text-xs text-error text-right'>↗︎ (22%)</p>
								<button className='btn btn-info btn-soft btn-block'>View</button>
							</div>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export default RecentSellers;
