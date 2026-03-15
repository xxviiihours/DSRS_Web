import { FriendList, FriendSearchList } from '@/features/social';
import { faSearch, faUserAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TheTab() {
	return (
		<div className='tabs tabs-border'>
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
				<input type='radio' name='my_tabs_4' />
				<FontAwesomeIcon icon={faSearch} />
				Add Friends
			</label>
			<div className='tab-content bg-base-100 p-6'>
				<FriendSearchList />
			</div>
		</div>
	);
}

export default TheTab;
