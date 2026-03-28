import { FriendList, FriendSearchList } from '@/features/social';
import { faSearch, faUserAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function TheTab() {
	return (
		<div className='tabs tabs-border h-full min-h-0'>
			<label className='tab text-xs lg:text-sm gap-1 lg:gap-2 px-2 lg:px-4'>
				<input type='radio' name='my_tabs_4' defaultChecked />
				<FontAwesomeIcon icon={faUserFriends} />
				<span className='hidden sm:inline'>Friend List</span>
			</label>

			<div className='tab-content bg-base-100 p-2 h-[calc(100%-3rem)] overflow-auto'>
				<FriendList />
			</div>

			<label className='tab'>
				<input type='radio' name='my_tabs_4' />
				<FontAwesomeIcon icon={faUserAlt} />
				Requests
			</label>

			<div className='tab-content bg-base-100 p-2 h-[calc(100%-3rem)] overflow-auto'>
				Tab content 2
			</div>

			<label className='tab'>
				<input type='radio' name='my_tabs_4' />
				<FontAwesomeIcon icon={faSearch} />
				Add Friends
			</label>

			<div className='tab-content bg-base-100 p-2 h-[calc(100%-3rem)] overflow-auto'>
				<FriendSearchList />
			</div>
		</div>
	);
}

export default TheTab;
