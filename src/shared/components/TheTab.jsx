import { PlayerList } from '@/features/player';
import { FriendList, FriendSearchForm, FriendSearchList } from '@/features/social';
import { useSocialNavigation } from '@/shared';
import { faSearch, faUserAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TheTab() {
	const { data, state, actions } = useSocialNavigation();

	return (
		<div className='tabs tabs-lift'>
			<label className='tab'>
				<input type='radio' name='my_tabs_4' defaultChecked />
				<FontAwesomeIcon icon={faUserFriends} />
				Friend List
			</label>
			<div className='tab-content bg-base-100 p-6'>
				<FriendList />
			</div>
			<label className='tab'>
				<input type='radio' name='my_tabs_4' />
				<FontAwesomeIcon icon={faUserAlt} />
				Requests
			</label>
			<div className='tab-content bg-base-100 p-6'>Tab content 2</div>

			<label className='tab'>
				<input type='radio' name='my_tabs_4' onClick={() => actions.doLoadOtherPlayers()} />
				<FontAwesomeIcon icon={faSearch} />
				Add Friends
			</label>
			<div className='tab-content bg-base-100 p-6'>
				<FriendSearchList
					otherPlayers={data.otherPlayers}
					isUnitialized={state.isUninitialized}
					isLoading={state.isOtherPlayersLoading}
					doSearch={actions.doLoadOtherPlayers}
				/>
			</div>
		</div>
	);
}

export default TheTab;
