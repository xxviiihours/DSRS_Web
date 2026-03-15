import React from 'react';
import { useFormik } from 'formik';
import { useTransaction } from '@/features/market';

function TransactionForm({ data, type = 'default' }) {
	const { transaction, state, actions } = useTransaction({ data });

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

	return (
		<>
			<form className='w-full'>
				<div className='grid grid-cols-2 w-full gap-4'>
					<label className='floating-label col-span-full'>
						<span>Quantity</span>
						<input
							name='quantity'
							type='number'
							className='input input-xs w-30 mb-1'
							min={0}
							max={transaction.max}
							value={formik.values.quantity}
							onChange={formik.handleChange}
						/>
					</label>

					<input
						name='quantity'
						type='range'
						className='range range-xs range-info col-span-full w-full'
						min={0}
						max={transaction.max}
						step='1'
						value={formik.values.quantity}
						onChange={formik.handleChange}
					/>
					{type === 'default' && (
						<>
							<button
								type='button'
								className='btn btn-success btn-soft btn-block btn-sm'
								disabled={state.purchaseLoading}
								onClick={handlePurchase}
							>
								{state.purchaseLoading ? 'Loading' : 'Buy'}
							</button>
							<button
								type='button'
								className='btn btn-error btn-soft btn-block btn-sm'
								disabled={!transaction.canSell || state.sellLoading}
								onClick={handleSell}
							>
								{state.sellLoading ? 'Loading' : 'Sell'}
							</button>
						</>
					)}

					{type === 'sell-only' && (
						<button
							type='button'
							className='btn btn-info btn-soft btn-block btn-sm col-span-full'
							disabled={!transaction.canSell || state.sellLoading}
							onClick={handleSell}
						>
							{state.sellLoading ? 'Selling...' : 'Sell this item'}
						</button>
					)}
				</div>
			</form>
		</>
	);
}

export default TransactionForm;
