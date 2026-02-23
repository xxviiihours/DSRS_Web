export const getApiErrorMessage = (result) => {
	return (
		result?.data?.detail ||
		result?.error?.data?.detail ||
		result?.data?.message ||
		result?.error?.data?.message ||
		result?.data ||
		result?.error?.data ||
		'Something went wrong. Please try again.'
	);
};
