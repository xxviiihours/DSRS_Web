import { useLazyGetPlayersQuery } from '@/features/player';
import { getApiErrorMessage } from '@/shared/utils/apiHelper';
import React from 'react';

const useSocialNavigation = () => {
	const [
		getPlayers,
		{
			data: otherPlayers,
			isUninitialized: isOtherPlayersUninitialized,
			isLoading: isOtherPlayersLoading,
		},
	] = useLazyGetPlayersQuery();

	const doLoadOtherPlayers = async (query) => {
		try {
			await getPlayers({ query }).unwrap();
		} catch (error) {
			getApiErrorMessage(error);
		}
	};

	return {
		data: { otherPlayers },
		state: { isOtherPlayersUninitialized, isOtherPlayersLoading },
		actions: { doLoadOtherPlayers },
	};
};

export default useSocialNavigation;
