import { PlayerRank, useLeaderboard } from '@/features/leaderboards';
import { currencyFormat, TheLoaderSmall } from '@/shared';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Top20Players() {
	const { currentPlayer, topPlayers, state } = useLeaderboard();
	return (
		<>
			<h2 className='p-4 pb-2 text-xl opacity-60 font-semibold'>Top #20 Ranking Players</h2>
			<ul className='list bg-base-100 rounded-box shadow-md h-165 overflow-auto'>
				{state.isLoading ? (
					<>
						{Array.from({ length: 10 }).map((_, index) => (
							<TheLoaderSmall key={index + 1} />
						))}
					</>
				) : (
					<>
						{topPlayers?.slice(0, -1).map((player, index) => (
							<li key={player.id} className='list-row grid'>
								<div className='col-start-1'>
									<div className='flex items-start gap-4'>
										<span className='text-4xl font-thin opacity-30 tabular-nums '>
											{index + 1 < 10 ? `0${index + 1}` : index + 1}
										</span>
										<img
											className='size-10 rounded-box'
											src='https://img.daisyui.com/images/profile/demo/1@94.webp'
										/>
									</div>
								</div>
								<div className='list-col-grow col-span-3'>
									<div>{player.name}</div>
									<div className='text-xs uppercase font-semibold opacity-60'>
										{currencyFormat(player.totalBalance)}
									</div>
								</div>
								<div className='list-col-grow	col-end'>
									{player.rank === 1 && (
										<FontAwesomeIcon icon={faCrown} size='2xl' className='' />
									)}
									{player.rank === 2 && (
										<FontAwesomeIcon icon={faCrown} size='2xl' className='text-primary' />
									)}
									{player.rank === 3 && (
										<FontAwesomeIcon icon={faCrown} size='2xl' className='text-yellow-900' />
									)}
								</div>
							</li>
						))}
					</>
				)}
			</ul>
			{state.isLoading ? <TheLoaderSmall /> : <PlayerRank currentPlayer={currentPlayer} />}
		</>
	);
}

export default Top20Players;
