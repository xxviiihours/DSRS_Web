import React, { useEffect } from 'react';

function TheModal({ show, action = null }) {
	useEffect(() => {
		document.getElementById('my_modal_2').showModal();
	}, [show]);
	return (
		<dialog id='my_modal_2' className='modal'>
			<div className='modal-box h-80 flex flex-col justify-center items-center text-center'>
				<h3 className='font-bold text-lg'>Welcome!</h3>
				<p className='py-4'>What should we call you?</p>

				<form onSubmit='' className='w-full flex flex-col items-center'>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<input
								type='text'
								placeholder='Enter your alias to play'
								className='input input-md w-full text-center validator'
								required
								minLength={3}
								maxLength={30}
								pattern='[A-Za-z][A-Za-z0-9\-]*'
							/>
							<span>Enter your alias to play</span>
							<p className='validator-hint text-center mt-2 w-72'>
								Must be 3 to 30 characters containing only letters, numbers or dash
							</p>
						</label>
					</div>

					<div className='form-group mt-4'>
						<button type='submit' className='btn'>
							Register
						</button>
					</div>
				</form>
			</div>

			<form method='dialog' className='modal-backdrop'>
				<button>close</button>
			</form>
		</dialog>
	);
}

export default TheModal;
