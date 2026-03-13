import {
	confirmPasswordValidator,
	emailValidator,
	passwordValidator,
	TheAlert,
	TheModal,
} from '@/shared';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const loginValidationScheme = yup.object({
	email: emailValidator,
	password: passwordValidator,
	confirmPassword: confirmPasswordValidator,
});

function LoginForm() {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: loginValidationScheme,

		onSubmit: async (values, { setSubmitting, resetForm }) => {
			setSubmitting(true);
			const payload = { ...values, balance: 1000 };
			await actions.doRegister(payload);

			resetForm();
			setSubmitting(false);
		},
	});

	return (
		<>
			{/* {showAlert && (
				<TheAlert
					show
					succeeded={state.isSuccess}
					message={state.message}
					onClose={actions.reset}
				/>
			)} */}
			<TheModal show={true} onClose={formik.handleReset}>
				<h1 className='font-bold text-lg py-10'>Welcome!</h1>
				{/* <p className='py-4'>What should we call you?</p> */}

				<form
					onSubmit={formik.handleSubmit}
					className='w-full flex flex-col items-center gap-4 h-100'
				>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<span>Enter your email</span>
							<input
								type='email'
								name='email'
								placeholder='Enter your email address'
								className={`input input-md w-full text-center ${
									formik.errors.email && formik.touched.email ? 'input-error' : ''
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							{formik.errors.email && formik.touched.email && (
								<p className='text-error text-xs italic text-center mt-2 w-72'>
									{formik.errors.email}
								</p>
							)}
						</label>
					</div>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<span>Enter you password</span>
							<input
								type='password'
								name='password'
								placeholder='Enter your password'
								className={`input input-md w-full text-center ${
									formik.errors.password && formik.touched.password ? 'input-error' : ''
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							{formik.errors.password && formik.touched.password && (
								<p className='text-error text-xs italic text-center mt-2 w-72'>
									{formik.errors.password}
								</p>
							)}
						</label>
					</div>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<span>Confirm password</span>
							<input
								type='password'
								name='confirmPassword'
								placeholder='Confirm password'
								className={`input input-md w-full text-center ${
									formik.errors.confirmPassword && formik.touched.confirmPassword
										? 'input-error'
										: ''
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.confirmPassword}
							/>
							{formik.errors.confirmPassword && formik.touched.confirmPassword && (
								<p className='text-error text-xs italic text-center w-72'>
									{formik.errors.confirmPassword}
								</p>
							)}
						</label>
					</div>
					<div className='form-group w-75 flex flex-col items-end'>
						<a className='link link-hover text-right text-sm italic px-4 text-info'>
							Continue as guest
						</a>
					</div>
					<div className='form-group w-full'>
						<button type='submit' className='btn btn-block w-75' disabled={true}>
							{true ? 'Loading...' : 'Continue'}
						</button>
					</div>
					<div className='form-group w-full'>
						<button type='button' className='btn btn-block w-75' disabled={true}>
							{true ? 'Loading...' : 'Continue'}
						</button>
					</div>
				</form>
			</TheModal>
		</>
	);
}

export default LoginForm;
