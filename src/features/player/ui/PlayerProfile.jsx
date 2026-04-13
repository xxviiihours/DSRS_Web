import { UpgradeForm } from '@/features/Account';
import { dateShortFormat } from '@/shared/utils';
import { faEdit, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function PlayerProfile({ player, playerStats, tradeStats }) {
	const [show, setShow] = useState(false);

	return (
		<div className='col-span-full h-50'>
			<UpgradeForm show={show} closeForm={setShow} />
			<div className='card bg-base-100 w-full h-full shadow-sm image-full relative'>
				<figure>
					<img
						src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
						alt='Shoes'
						width={'100%'}
					/>
				</figure>
				<div className='flex absolute bottom-0 left-0 p-2 pl-4 w-100'>
					<div className='avatar'>
						<div className='ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2'>
							<img src='https://img.daisyui.com/images/profile/demo/spiderperson@192.webp' />
						</div>
					</div>
					<div className='content-center p-2 pl-5 grid'>
						<h2 className='card-title font-bold text-xl text-white'>{player.name}</h2>
						<span className={'font-semibold text-xs  text-white'}>
							Member since {dateShortFormat(player.createdAt)}
						</span>
					</div>
					<div className='flex absolute bottom-1 left-33 gap-5'>
						<p className='font-semibold text-xs  text-info'>
							Rank: <span className='font-bold text-white'> #{playerStats?.rank}</span>
						</p>

						<p className='font-semibold text-xs text-info'>
							Total trades:{' '}
							<span className='font-bold text-white'>{playerStats?.totalTrades}</span>
						</p>
					</div>
				</div>
				{/* edit profile / setting */}
				<div className='flex flex-row absolute bottom-0 right-0 gap-2 p-2'>
					{player.isGuest ? (
						<button type='button' className='btn btn-sm' onClick={() => setShow(true)}>
							<FontAwesomeIcon icon={faEdit} /> Ugrade Account
						</button>
					) : (
						<button type='button' className='btn btn-sm' onClick={() => setShow(true)}>
							<FontAwesomeIcon icon={faEdit} /> Edit profile
						</button>
					)}
					<button className='btn btn-sm w-10'>
						<FontAwesomeIcon icon={faGear} size='xl' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default PlayerProfile;
