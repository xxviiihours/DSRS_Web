import { useLazyGetPlayersQuery } from '@/features/player';
import { getApiErrorMessage } from '@/shared';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import React from 'react';

function FriendSearchForm({ search }) {
	const [getPlayers, { isLoading }] = useLazyGetPlayersQuery();
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
			<div className='join'>
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
				<button className='btn' type='submit'>
					search
				</button>
			</div>
		</form>
	);
}

export default FriendSearchForm;
