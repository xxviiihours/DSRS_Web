import { useRegisterAccount } from '@/features/Account';
import {
	confirmPasswordValidator,
	emailValidator,
	nameValidator,
	passwordValidator,
	TheFormField,
	TheModal,
} from '@/shared';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

const playerValidationSchema = yup.object({
	name: nameValidator,
	email: emailValidator,
	password: passwordValidator,
	confirmPassword: confirmPasswordValidator,
});

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

function RegisterForm() {
	const { state, actions } = useRegisterAccount();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: playerValidationSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			setSubmitting(true);
			const payload = { ...values };
			const result = await actions.doRegisterAccount(payload);

			if (result.succeeded) {
				navigate(result.redirectUrl, { replace: true });
			}
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
					className='w-80 flex flex-col items-center gap-2  h-100'
				>
					{Object.keys(formik.initialValues).map((key) => (
						<TheFormField key={key} name={key} {...formik} />
					))}

					<div className='form-group mt-4 space-y-2 w-full'>
						<button
							type='submit'
							className='btn btn-block btn-primary w-full'
							disabled={state.isLoading}
						>
							{state.isLoading ? 'Loading...' : 'Continue'}
						</button>
						<button
							type='button'
							className='btn btn-block btn-soft'
							disabled={state.isLoading}
							onClick={() => navigate('/login', { replace: true })}
						>
							Back to Login
						</button>
					</div>
				</form>
			</TheModal>
		</>
	);
}

export default RegisterForm;
