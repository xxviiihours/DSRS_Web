import { useLazyGetPlayersQuery } from '@/features/player';
import React, { use, useEffect } from 'react';

const usePlayerSearch = () => {
	const [getPlayers, { data: otherPlayers, isUninitialized, isLoading, isError }] =
		useLazyGetPlayersQuery();

	const doSearchPlayers = async (query) => {
		try {
			await getPlayers({ query }).unwrap();
		} catch (error) {
			getApiErrorMessage(error);
		}
	};

	useEffect(() => {
		if (isUninitialized) doSearchPlayers();
	}, [isUninitialized]);

	return {
		data: { otherPlayers },
		playerState: { isUninitialized, isLoading, isError },
		playerActions: { doSearchPlayers },
	};
};

export default usePlayerSearch;
