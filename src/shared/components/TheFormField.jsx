import { formatLabel } from '@/shared/utils/labelHelper';
import React from 'react';

function TheFormField(props) {
	const { name, values, errors, touched, handleBlur, handleChange } = props;

	const isPasswordField = name.toLowerCase().includes('password');
	const isConfirmPasswordField = name.toLowerCase().includes('confirmpassword');
	return (
		<div className='form-group w-full items-center'>
			<label className='floating-label'>
				<span className=''>Enter your {formatLabel(name)}</span>
				<input
					name={name}
					type={isPasswordField ? 'password' : 'text'}
					placeholder={
						isConfirmPasswordField ? 'Confirm Password' : 'Enter your ' + formatLabel(name)
					}
					className={`input input-md w-full text-center ${
						errors[name] && touched[name] ? 'input-error' : ''
					}`}
					onBlur={handleBlur}
					onChange={handleChange}
					value={values[name]}
				/>
				{errors[name] && touched[name] && (
					<p className='text-error text-xs italic text-center'>{errors[name]}</p>
				)}
			</label>
		</div>
	);
}

export default TheFormField;
