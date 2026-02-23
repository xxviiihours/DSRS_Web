import React, { useEffect } from 'react';

function TheModal({ children }) {
	return (
		<dialog id='my_modal_2' className='modal modal-open'>
			<div className='modal-box h-100 flex flex-col justify-center items-center text-center'>
				{children}
			</div>

			<form method='dialog' className='modal-backdrop'>
				<button type='reset'>close</button>
			</form>
		</dialog>
	);
}

export default TheModal;
