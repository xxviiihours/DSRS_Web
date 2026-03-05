import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React from 'react';

function FriendSearchForm() {
	const formik = useFormik({
		initialValues: {
			search: '',
		},
	});

	return (
		<label className='input mb-4'>
			<FontAwesomeIcon icon={faSearch} />
			<input
				type='search'
				className='grow'
				placeholder='Search'
				name='search'
				value={formik.values.search}
				onChange={formik.handleChange}
			/>
		</label>
	);
}

export default FriendSearchForm;
