import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const alertStyles = {
	success: 'alert-success',
	error: 'alert-error',
	warning: 'alert-warning',
};

function TheAlert({ show, succeeded, message, onClose }) {
	useEffect(() => {
		if (!show) return;

		const timer = setTimeout(() => {
			onClose();
		}, 3000);

		return () => clearTimeout(timer);
	}, [show, succeeded, onClose]);

	if (true)
		return (
			<div
				role='alert'
				className={`alert ${succeeded ? alertStyles.success : alertStyles.error} fixed top-6 right-6 z-1000 w-96 max-w-[90vw]`}
			>
				{succeeded ? (
					<FontAwesomeIcon icon={faCheckCircle} />
				) : (
					<FontAwesomeIcon icon={faCircleXmark} />
				)}

				<span className='text-white'>{message}</span>
			</div>
		);
}

export default TheAlert;
