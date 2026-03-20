import { useUpgradeAccount } from '@/features/Account';
import {
	confirmPasswordValidator,
	emailValidator,
	nameValidator,
	passwordValidator,
	TheFormField,
	TheModal,
} from '@/shared';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
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

function UpgradeForm({ show, closeForm }) {
	const { id, name } = useSelector((state) => state.player);
	const { state, actions } = useUpgradeAccount();

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			...initialValues,
			name: name,
		},
		validationSchema: playerValidationSchema,
		onSubmit: async (values) => {
			const result = await actions.doUpgradeAccount(id, values);
			if (result.succeeded) {
				navigate(result.redirectUrl, { replace: true });
			}
		},
	});

	return (
		<TheModal show={show} onClose={() => closeForm(false)} type='form'>
			<h3 className='font-bold text-lg mb-15'>Upgrade your account</h3>
			<form
				onSubmit={formik.handleSubmit}
				className='w-80 flex flex-col items-center gap-2  h-80'
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
				</div>
			</form>
		</TheModal>
	);
}

export default UpgradeForm;
