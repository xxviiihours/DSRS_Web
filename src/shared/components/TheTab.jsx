import { FriendList } from '@/features/social';
import {
	faAdd,
	faAddressBook,
	faAddressCard,
	faSearch,
	faUserAlt,
	faUserFriends,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TheTab() {
	return (
		<div className='tabs tabs-lift h-200 overflow-auto'>
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
			<div className='tab-content bg-base-100 p-6'>Tab content 3</div>
		</div>
	);
}

export default TheTab;
