import { useGetTop20PlayersByIdQuery } from '@/features/leaderboards/api/leaderboardApi';
import { currencyFormat } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';
import React from 'react';
import { useSelector } from 'react-redux';

function Top20Players() {
	const id = useSelector((state) => state.player.id);
	const { data: topPlayers, isLoading } = useGetTop20PlayersByIdQuery(
		id ? { id: id } : skipToken,
	);
	return (
		<>
			<h2 className='p-4 pb-2 text-xl opacity-60 font-semibold'>Top Ranking Players</h2>
			<ul className='list bg-base-100 rounded-box shadow-md h-165 overflow-auto'>
				{topPlayers?.map((player, index) => (
					<li key={player.id} className='list-row'>
						<div className='text-4xl font-thin opacity-30 tabular-nums'>
							{index + 1 < 10 ? `0${index + 1}` : index + 1}
						</div>
						<div>
							<img
								className='size-10 rounded-box'
								src='https://img.daisyui.com/images/profile/demo/1@94.webp'
							/>
						</div>
						<div className='list-col-grow'>
							<div>{player.name}</div>
							<div className='text-xs uppercase font-semibold opacity-60'>
								{currencyFormat(player.totalBalance)}
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className='text-center gap-4 border-base-content/50 border-2 p-4 m-4'>test</div>
		</>
	);
}

export default Top20Players;
