import React, { useEffect, useState } from 'react';

const alertStyles = {
	success: 'alert-success',
	error: 'alert-error',
	warning: 'alert-warning',
};

function TheAlert({ show, succeeded, message, onClose }) {
	useEffect(() => {
		if (!show) return;

		const timer = setTimeout(() => {
			onClose(); // parent sets show = false
		}, 4000);

		return () => clearTimeout(timer);
	}, [show, succeeded, onClose]);

	if (show)
		return (
			<div
				role='alert'
				className={`alert ${succeeded ? alertStyles.success : alertStyles.error} fixed top-6 right-6 z-1000 w-96 max-w-[90vw]`}
			>
				{succeeded ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 shrink-0 stroke-current text-base-100'
						fill='none'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 shrink-0 stroke-current text-base-100'
						fill='none'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				)}

				<span className='text-base-100'>{message}</span>
			</div>
		);
}

export default TheAlert;
