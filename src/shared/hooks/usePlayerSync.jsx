import { setPlayer, useGetPlayerByIdQuery } from '@/features/player';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const usePlayerSync = () => {
	const playerId = useSelector((state) => state.player?.id);
	const dispatch = useDispatch();
	const { data: updatedPlayer, isFetching } = useGetPlayerByIdQuery(
		playerId ? { id: playerId } : skipToken,
	);

	useEffect(() => {
		if (updatedPlayer) {
			dispatch(setPlayer(updatedPlayer));
		}
	}, [updatedPlayer]);

	return {
		id: playerId,
		data: updatedPlayer,
		state: {
			isFetching,
		},
	};
};

export default usePlayerSync;
