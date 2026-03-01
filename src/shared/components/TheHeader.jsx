import { clearPlayer } from '@/features/player';
import { currencyFormat } from '@/shared/utils/valueFormatter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function TheHeader() {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.player);
	const item = useSelector((state) => state.item);
	const navigate = useNavigate();

	const currentItem = player?.inventoryItems.find((p) => p.itemId === item?.id);
	return (
		<div className='navbar bg-base-100 shadow-sm flex justify-between gap-2'>
			<div className='flex flex-1'>
				<a className='btn btn-ghost text-xl' onClick={() => navigate('/')}>
					Daily Stock Redistribution System
				</a>
			</div>
			<div className='grid content-center'>
				<span className='text-xs text-info opacity-60 inline-block align-baseline'>
					Balance
				</span>
				<p className='text-info font-semibold slashed-zero tabular-nums font-mono'>
					{currencyFormat(player?.balance ?? 0)}
				</p>
			</div>
			<div className='flex-none'>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
						<div className='indicator'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								{' '}
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
								/>{' '}
							</svg>
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
							<span className='text-info font-semibold'>Max Limit: 500</span>
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
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
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
