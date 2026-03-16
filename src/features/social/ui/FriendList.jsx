import { FriendSearchForm } from '@/features/social';
import React from 'react';

function FriendList() {
	return (
		<>
			<FriendSearchForm />
			<div className='h-full overflow-auto'>
				{Array.from({ length: 0 }).map((_, index) => (
					<li key={index + 1} className='list-row grid grid-cols-5 gap-4 p-2 '>
						<div className='col-span-1'>
							<div className='flex'>
								<img
									className='size-10 rounded-box'
									src='https://img.daisyui.com/images/profile/demo/1@94.webp'
								/>
							</div>
						</div>
						<div className='list-col-grow col-span-4'>
							<div>Name</div>
							<div className='text-xs uppercase font-semibold opacity-60'>Status ??</div>
						</div>
					</li>
				))}
			</div>
		</>
	);
}

export default FriendList;
