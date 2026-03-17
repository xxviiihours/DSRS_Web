import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React from 'react';

function TheSearchForm({ search = null }) {
	const formik = useFormik({
		initialValues: {
			search: '',
		},
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			await search(values.search);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className='join mb-4 w-full'>
				<label className='input'>
					<FontAwesomeIcon icon={faSearch} />
					<input
						type='search'
						className='w-auto'
						placeholder='Search'
						name='search'
						value={formik.values.search}
						onChange={formik.handleChange}
					/>
				</label>
				<button className='btn' type='submit'>
					search
				</button>
			</div>
		</form>
	);
}

export default TheSearchForm;
