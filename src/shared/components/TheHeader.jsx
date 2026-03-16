import { clearPlayer } from '@/features/player';
import { useThemeProvider } from '@/providers';
import { currencyFormat } from '@/shared/utils/valueFormatter';
import { faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function TheHeader() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const player = useSelector((state) => state.player);
	const item = useSelector((state) => state.item);

	const { theme, changeTheme } = useThemeProvider();

	const currentItem = player?.inventoryItems.find((p) => p.itemId === item?.id);

	return (
		<div className=' bg-base-100 border-2 border-base-300 flex justify-between p-1'>
			<div className='flex flex-1'>
				<a className='btn btn-ghost text-xl' onClick={() => navigate('/')}>
					Daily Stock Redistribution System
				</a>
			</div>
			<div className='grid content-center mr-4'>
				<span className='text-xs text-info opacity-60 inline-block align-baseline'>
					Balance
				</span>
				<p className='text-info font-semibold slashed-zero tabular-nums font-mono'>
					{currencyFormat(player?.balance ?? 0)}
				</p>
			</div>
			<div className='flex-none gap-2'>
				<label className='swap swap-rotate'>
					{/* this hidden checkbox controls the state */}
					<input
						type='checkbox'
						className='theme-controller'
						value={theme}
						checked={theme === 'wight-light'}
						onChange={(e) => changeTheme(e.target.checked ? 'wight-light' : 'wight')}
					/>
					<FontAwesomeIcon className='swap-on fill-current' icon={faMoon} size='lg' />
					<FontAwesomeIcon className='swap-off fill-current' icon={faSun} size='lg' />
				</label>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
						<div className='indicator'>
							<FontAwesomeIcon icon={faCartShopping} size='xl' />
							<span className='badge badge-sm indicator-item'>
								{currentItem?.quantity ?? 0}
							</span>
						</div>
					</div>
					<div
						tabIndex={0}
						className='card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow'
					>
						<div className='card-body'>
							<span className='text-lg font-bold'>Quantity: {currentItem?.quantity ?? 0}</span>
							<span className='text-info font-semibold'>
								Purchase Limit: {player?.purchaseLimit ?? 0}/100
							</span>
							<div className='card-actions'>
								<button
									className='btn btn-primary btn-block'
									onClick={() => navigate('/inventory')}
								>
									View inventory
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
							/>
						</div>
					</div>
					<ul
						tabIndex='-1'
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						<li>
							<a className='justify-between' onClick={() => navigate('/player')}>
								Profile
								<span className='badge badge-secondary'>{player?.name}</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a
								onClick={() => {
									dispatch(clearPlayer());
									navigate('/');
								}}
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TheHeader;
