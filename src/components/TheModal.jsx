import React, { useEffect } from 'react';

function TheModal({ show, submit = null, onClose, children }) {
	return (
		<dialog id='my_modal_2' className={show ? 'modal modal-open' : 'modal'}>
			<div className='modal-box h-100 flex flex-col justify-center items-center text-center'>
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
