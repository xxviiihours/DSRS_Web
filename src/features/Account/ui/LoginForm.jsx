import useAccountLogin from '@/features/Account/hooks/useAccountLogin';
import { nameValidator, passwordValidator, TheModal } from '@/shared';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const loginValidationScheme = yup.object({
	username: nameValidator,
	password: passwordValidator,
});

function LoginForm() {
	const { state, actions } = useAccountLogin();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: loginValidationScheme,

		onSubmit: async (values, { setSubmitting, resetForm }) => {
			setSubmitting(true);
			await actions.doUserLogin(values);
			setSubmitting(false);
		},
	});

	const handleGuestLogin = async () => {
		await actions.doGuestLogin();
	};

	return (
		<>
			<TheModal show={true} onClose={formik.handleReset}>
				<h1 className='font-bold text-lg py-10'>Welcome!</h1>

				<form
					onSubmit={formik.handleSubmit}
					className='w-full flex flex-col items-center gap-4 h-100'
				>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<span>Enter your username</span>
							<input
								type='text'
								name='username'
								placeholder='Enter your username'
								className={`input input-md w-full text-center ${
									formik.errors.username && formik.touched.username ? 'input-error' : ''
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.username}
							/>
							{formik.errors.username && formik.touched.username && (
								<p className='text-error text-xs italic text-center mt-2 w-72'>
									{formik.errors.username}
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
					<div className='form-group w-75 flex flex-col items-end'>
						<button
							type='button'
							className='btn btn-link btn-xs text-right text-sm italic px-4 text-info'
							onClick={handleGuestLogin}
							disabled={state.isGuestLoading}
						>
							{state.isGuestLoading ? (
								<>
									<span className='loading loading-dots loading-sm' /> Creating...
								</>
							) : (
								'Login as guest'
							)}
						</button>
					</div>
					<div className='form-group w-full mt-4'>
						<button
							type='submit'
							className='btn btn-block w-75  btn-primary'
							disabled={formik.isSubmitting}
						>
							{formik.isSubmitting ? (
								<>
									<span className='loading loading-spinner loading-sm' /> Logging in...
								</>
							) : (
								'Login'
							)}
						</button>
					</div>
					<div className='form-group w-full'>
						<button
							type='button'
							className='btn btn-block w-75 btn-soft'
							disabled={formik.isSubmitting}
						>
							Sign up
						</button>
					</div>
				</form>
			</TheModal>
		</>
	);
}

export default LoginForm;
