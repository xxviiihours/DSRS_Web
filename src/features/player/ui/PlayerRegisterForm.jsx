import { useFormik } from 'formik';
import TheModal from '../../../components/TheModal';
import TheAlert from '../../../components/TheAlert';
import { useLazyGetPlayerByNameQuery, useRegisterPlayerMutation } from '../api/playerApi';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setPlayer } from '../model/playerSlice';

function PlayerRegisterForm() {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.player);
	const [getPlayerByName] = useLazyGetPlayerByNameQuery();
	const [registerPlayer] = useRegisterPlayerMutation();

	const [alertOptions, setAlertOptions] = useState({
		show: false,
		success: false,
		message: '',
		onClose: null,
	});

	const formik = useFormik({
		initialValues: {
			name: '',
		},
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			const payload = { ...values, balance: 1000 };
			try {
				let player;

				try {
					player = await getPlayerByName(payload).unwrap();
				} catch (err) {
					if (err?.status === 404) {
						player = await registerPlayer(payload).unwrap();

						setAlertOptions((prev) => ({
							...prev,
							show: true,
							success: true,
							message: 'Successfully Registered!',
							onClose: () => setAlertOptions({ show: false }),
						}));
					} else {
						throw err; // real error
					}
				}

				dispatch(setPlayer(player));
			} catch (error) {
				setAlertOptions((prev) => ({
					...prev,
					show: true,
					success: false,
					message: getApiErrorMessage(error),
					onClose: () => setAlertOptions({ show: false }),
				}));
			} finally {
				setSubmitting(false);
			}
		},
	});

	if (player) return null;
	return (
		<>
			<TheAlert {...alertOptions} />
			<TheModal>
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
						<button type='submit' className='btn' disabled={formik.isSubmitting}>
							{formik.isSubmitting ? 'Loading...' : 'Continue'}
						</button>
					</div>
				</form>
			</TheModal>
		</>
	);
}

export default PlayerRegisterForm;
