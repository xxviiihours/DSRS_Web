import { useGetTop20PlayersByIdQuery } from '@/features/leaderboards/api/leaderboardApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

const useLeaderboard = () => {
	const id = useSelector((state) => state.player.id);
	const { data: topPlayers, isLoading } = useGetTop20PlayersByIdQuery(
		id ? { id: id } : skipToken,
	);
	const currentPlayer = topPlayers?.find((p) => p.id === id);

	return {
		currentPlayer,
		topPlayers,
		state: {
			isLoading,
		},
	};
};

export default useLeaderboard;
