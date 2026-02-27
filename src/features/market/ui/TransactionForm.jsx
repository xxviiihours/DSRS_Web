import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { TheAlert, useTransaction } from '@/shared';

function TransactionForm({ data }) {
	const { player, state, actions } = useTransaction();

	const formik = useFormik({
		initialValues: {
			quantity: 0,
		},
		onSubmit: () => {},
	});

	const handlePurchase = async () => {
		await actions.doPurchase({
			quantity: formik.values.quantity,
			itemId: data.item.id,
		});

		formik.resetForm();
	};

	const handleSell = async () => {
		await actions.doSell({
			quantity: formik.values.quantity,
			itemId: data.item.id,
		});

		formik.resetForm();
	};

	const showAlert = state.isSuccess || state.isError;

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

			<form className='w-full'>
				<div className='grid grid-cols-2 w-full gap-4'>
					<label className='floating-label col-span-full'>
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
						className='range range-xs range-info col-span-full w-full'
						min={0}
						max={1000}
						step='1'
						value={formik.values.quantity}
						onChange={formik.handleChange}
					/>
					<button
						type='button'
						className='btn btn-success btn-soft btn-block'
						disabled={formik.isSubmitting}
						onClick={handlePurchase}
					>
						{state.isLoading ? 'Loading' : 'Buy'}
					</button>
					<button
						type='button'
						className='btn btn-error btn-soft btn-block'
						disabled={formik.isSubmitting}
						onClick={handleSell}
					>
						{state.isLoading ? 'Loading' : 'Sell'}
					</button>
				</div>
			</form>
		</>
	);
}

export default TransactionForm;
