import React from 'react';

function RecentBuyers() {
	return (
		<div className='card bg-base-100 col-span-1 md:col-span-2 lg:col-span-1 shadow-sm w-auto content-center'>
			<div className='card-body p-0 pt-2'>
				<h2 className='card-title justify-center mb-4'>RECENT BUYERS</h2>
				<ul className='list'>
					<li className='list-row'>
						<div className=''>
							<img
								className='size-10 rounded-box'
								src='https://img.daisyui.com/images/profile/demo/1@94.webp'
							/>
						</div>
						<div className='list-col-grow'>
							<div className='font-semibold'>Jessi Tunderg</div>
							<div className='opacity-60 text-xs'>$100.00</div>
						</div>
						<div className='text-xs text-error'>↗︎ (22%)</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default RecentBuyers;
