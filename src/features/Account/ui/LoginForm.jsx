import { useAuthProvider } from '@/providers';
import { userNameValidator, passwordValidator, TheFormField, TheModal } from '@/shared';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

const loginValidationScheme = yup.object({
	username: userNameValidator,
	password: passwordValidator,
});

function LoginForm() {
	const navigate = useNavigate();
	const { state, actions } = useAuthProvider();

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: loginValidationScheme,

		onSubmit: async (values, { setSubmitting }) => {
			setSubmitting(true);

			const result = await actions.doUserLogin(values);
			if (result.succeeded) {
				navigate(result.redirectUrl, { replace: true });
			}

			setSubmitting(false);
		},
	});

	const handleGuestLogin = async () => {
		const result = await actions.doGuestLogin();
		if (result.succeeded) {
			navigate(result.redirectUrl, { replace: true });
		}
	};

	return (
		<>
			<TheModal show={true} onClose={formik.handleReset}>
				<h1 className='font-bold text-lg py-10'>Welcome!</h1>

				<form
					onSubmit={formik.handleSubmit}
					className='w-80 flex flex-col items-end gap-2 h-100'
				>
					{Object.keys(formik.initialValues).map((key) => (
						<TheFormField key={key} name={key} {...formik} />
					))}
					<div className='form-group w-full mt-4'>
						<button
							type='submit'
							className='btn btn-block btn-primary'
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
							className='btn btn-block btn-soft'
							onClick={() => navigate('/register', { replace: true })}
							disabled={formik.isSubmitting}
						>
							Sign up
						</button>
					</div>

					<div className='form-group'>
						<button
							type='button'
							className='btn btn-link btn-xs text-right text-sm italic text-info'
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
				</form>
			</TheModal>
		</>
	);
}

export default LoginForm;
