import { usePlayerSearch } from '@/features/player';
import { FriendSearchForm } from '@/features/social';
import { TheLoaderSmall } from '@/shared/components';
import React from 'react';

function FriendSearchList() {
	const { data, playerActions, playerState } = usePlayerSearch();

	return (
		<div className='flex flex-col h-full'>
			<FriendSearchForm search={playerActions.doSearchPlayers} />
			<div className='flex-1 overflow-auto scrollbar-auto-hide min-h-0'>
				{playerState.isUninitialized || playerState.isLoading ? (
					<>
						{Array.from({ length: 10 }).map((_, index) => (
							<TheLoaderSmall key={index + 1} />
						))}
					</>
				) : (
					<>
						{data.otherPlayers?.map((otherPlayer) => (
							<li key={otherPlayer.id} className='list-row grid grid-cols-5 gap-4 p-2 '>
								<div className='col-span-1'>
									<div className='flex'>
										<img
											className='size-10 rounded-box'
											src='https://img.daisyui.com/images/profile/demo/1@94.webp'
										/>
									</div>
								</div>
								<div className='list-col-grow col-span-3 content-center'>
									<div>{otherPlayer.name}</div>
								</div>
								<div className='list-col-grow content-center'>
									<button className='btn btn-xs btn-ghost btn-info'>Add</button>
								</div>
							</li>
						))}
					</>
				)}
			</div>
		</div>
	);
}

export default FriendSearchList;
