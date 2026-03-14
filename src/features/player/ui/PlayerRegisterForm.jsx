import { usePlayerRegistration } from '@/features/player';
import {
	confirmPasswordValidator,
	emailValidator,
	nameValidator,
	passwordValidator,
	TheModal,
} from '@/shared';
import { useFormik } from 'formik';
import * as yup from 'yup';

const playerValidationScheme = yup.object({
	name: nameValidator,
	email: emailValidator,
	password: passwordValidator,
	confirmPassword: confirmPasswordValidator,
});

function PlayerRegisterForm() {
	const { player, state, actions } = usePlayerRegistration();
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: playerValidationScheme,
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
			<TheModal show={true} onClose={formik.handleReset}>
				<h3 className='font-bold text-lg'>Welcome!</h3>
				<p className='py-4'>What should we call you?</p>

				<form
					onSubmit={formik.handleSubmit}
					className='w-full flex flex-col items-center gap-4'
				>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<span>Enter your alias to play</span>
							<input
								type='text'
								name='name'
								placeholder='Enter your alias to play'
								// className='input input-md w-full text-center validator form-control'
								className={`input input-md w-full text-center ${
									formik.errors.name && formik.touched.name ? 'input-error' : ''
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
							{formik.errors.name && formik.touched.name && (
								<p className='text-error text-xs italic text-center mt-2 w-72'>
									{formik.errors.name}
								</p>
							)}
						</label>
					</div>
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
								<p className='text-error text-xs italic text-center mt-2 w-72'>
									{formik.errors.confirmPassword}
								</p>
							)}
						</label>
					</div>

					<div className='form-group mt-4'>
						<button type='submit' className='btn btn-block w-full' disabled={state.isLoading}>
							{state.isLoading ? 'Loading...' : 'Continue'}
						</button>
					</div>
				</form>
			</TheModal>
		</>
	);
}

export default PlayerRegisterForm;
