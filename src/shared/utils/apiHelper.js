export const getApiErrorMessage = (result) => {
	const data = result?.data || result?.error?.data;

	if (!data) {
		return 'Something went wrong. Please try again.';
	}

	if (data.errors && typeof data.errors === 'object') {
		const firstErrorKey = Object.keys(data.errors)[0];
		if (firstErrorKey && Array.isArray(data.errors[firstErrorKey])) {
			return data.errors[firstErrorKey][0];
		}
	}

	if (data.detail) return data.detail;
	if (data.message) return data.message;

	if (data.title) {
		return data.title;
	}
	if (typeof data === 'string') return data;

	return 'Something went wrong. Please try again.';
};
