export const currencyFormat = (value) => {
	return new Intl.NumberFormat('en-PH', {
		style: 'currency',
		currency: 'PHP',
	}).format(value ? value : 0);
};

export const dateFormat = (isoDateString) => {
	if (!isoDateString) return '';

	const date = new Date(isoDateString);
	return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};
