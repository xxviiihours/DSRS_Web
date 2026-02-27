import { useFormik } from 'formik';
import TheAlert from '../../../shared/components/TheAlert';
import TheModal from '../../../shared/components/TheModal';
import usePlayerRegistration from '../hooks/usePlayerRegistration';

function PlayerRegisterForm() {
	const { player, state, actions } = usePlayerRegistration();

	const formik = useFormik({
		initialValues: {
			name: '',
		},
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			setSubmitting(true);
			const payload = { ...values, balance: 1000 };
			await actions.doRegister(payload);

			resetForm();
			setSubmitting(false);
		},
	});

	const showAlert = state.isSuccess || state.isError;

	if (player) return null;
	return (
		<>
			{showAlert && (
				<TheAlert
					show
					succeeded={state.isSuccess}
					message={state.message}
					onClose={actions.reset}
				/>
			)}
			<TheModal show={true} onClose={formik.handleReset}>
				<h3 className='font-bold text-lg'>Welcome!</h3>
				<p className='py-4'>What should we call you?</p>

				<form onSubmit={formik.handleSubmit} className='w-full flex flex-col items-center'>
					<div className='form-group w-full flex flex-col items-center'>
						<label className='floating-label w-72'>
							<input
								type='text'
								name='name'
								placeholder='Enter your alias to play'
								className='input input-md w-full text-center validator form-control'
								required
								minLength={3}
								maxLength={30}
								pattern='[A-Za-z][A-Za-z0-9\-]*'
								onChange={formik.handleChange}
								value={formik.values.name}
							/>
							<span>Enter your alias to play</span>
							<p className='validator-hint text-center mt-2 w-72'>
								Must be 3 to 30 characters containing only letters, numbers or dash
							</p>
						</label>
					</div>

					<div className='form-group mt-4'>
						<button type='submit' className='btn' disabled={state.isLoading}>
							{state.isLoading ? 'Loading...' : 'Continue'}
						</button>
					</div>
				</form>
			</TheModal>
		</>
	);
}

export default PlayerRegisterForm;
