import { setPlayer, useGetPlayerByIdQuery } from '@/features/player';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const usePlayerSync = () => {
	const id = useSelector((state) => state.player?.id);
	const dispatch = useDispatch();
	const { data: updatedPlayer, isFetching } = useGetPlayerByIdQuery(
		id ? { id: id } : skipToken,
	);

	useEffect(() => {
		if (updatedPlayer) {
			dispatch(setPlayer(updatedPlayer));
		}
	}, [updatedPlayer]);

	return {
		id,
		data: updatedPlayer,
		state: {
			isFetching,
		},
	};
};

export default usePlayerSync;
