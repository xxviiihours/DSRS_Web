import React, { useEffect } from 'react';

function TheModal({ show, submit = null, onClose, children, size = 'default' }) {
	return (
		<dialog id='my_modal_2' className={show ? 'modal modal-open' : 'modal'}>
			<div
				className={`modal-box flex flex-col justify-center items-center text-center
					${size === 'large' ? 'w-11/12 max-w-5xl h-160' : size === 'small' ? 'h-100' : 'h-auto'}`}
			>
				{children}
			</div>

			<form method='dialog' className='modal-backdrop'>
				<button type='reset' onClick={onClose}>
					close
				</button>
			</form>
		</dialog>
	);
}

export default TheModal;
