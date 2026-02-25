import React, { useState } from 'react';
import TheModal from '../../../components/TheModal';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { usePurchaseItemMutation } from '../api/marketApi';
import TheAlert from '../../../components/TheAlert';
import { getApiErrorMessage } from '../../../utils/apiHelper';

function TransactionForm({ data }) {
	const player = useSelector((state) => state.player);
	const [purchaseItem] = usePurchaseItemMutation(player.id);
	const [alertOptions, setAlertOptions] = useState({
		show: false,
		succeeded: false,
		message: '',
		onClose: null,
	});

	const formik = useFormik({
		initialValues: {
			type: '',
			quantity: 0,
		},
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const request = { ...values, itemId: data.item.id, playerId: player.id };

				if (values.type === 'BUYING') {
					await purchaseItem(request).unwrap();
				}
				setAlertOptions((prev) => ({
					...prev,
					show: true,
					succeeded: true,
					message: 'Purchase Completed!',
					onClose: () => setAlertOptions({ show: false }),
				}));
			} catch (error) {
				console.log(error);
				setAlertOptions((prev) => ({
					...prev,
					show: true,
					succeeded: false,
					message: getApiErrorMessage(error),
					onClose: () => setAlertOptions({ show: false }),
				}));
			}
		},
	});

	return (
		<>
			<TheAlert {...alertOptions} />
			<form onSubmit={formik.handleSubmit} className='w-full'>
				<div className='form-group mb-2'>
					<label className='floating-label'>
						<span>Quantity</span>
						<input
							name='quantity'
							type='number'
							className='input input-sm w-30 mb-1'
							min={0}
							max={1000}
							value={formik.values.quantity}
							onChange={formik.handleChange}
						/>
					</label>

					<input
						name='quantity'
						type='range'
						className='range range-xs range-info'
						min={0}
						max='1000'
						step='1'
						value={formik.values.quantity}
						onChange={formik.handleChange}
					/>
				</div>
				<div className='grid grid-cols-2 w-full gap-4'>
					<button
						type='button'
						className='btn btn-success btn-soft btn-block'
						disabled={formik.isSubmitting}
						onClick={() => {
							formik.setFieldValue('type', 'BUYING');
							formik.handleSubmit();
						}}
					>
						{formik.isSubmitting ? 'Loading' : 'Buy'}
					</button>
					<button
						type='button'
						className='btn btn-error btn-soft btn-block'
						onClick={() => {
							formik.setFieldValue('type', 'SELLING');
							formik.handleSubmit();
						}}
					>
						{formik.isSubmitting ? 'Loading' : 'Sell'}
					</button>
				</div>
			</form>
		</>
	);
}

export default TransactionForm;
