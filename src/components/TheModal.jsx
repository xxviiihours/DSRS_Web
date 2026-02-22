import React, { useEffect } from 'react';

function TheModal({ show, children }) {
	useEffect(() => {
		if (show) document.getElementById('my_modal_2').showModal();
	}, [show]);
	return (
		<dialog id='my_modal_2' className='modal'>
			<div className='modal-box h-80 flex flex-col justify-center items-center text-center'>
				{children}
			</div>

			<form method='dialog' className='modal-backdrop'>
				<button type='reset'>close</button>
			</form>
		</dialog>
	);
}

export default TheModal;
