export const currencyFormat = (value) => {
	return new Intl.NumberFormat('en-PH', {
		style: 'currency',
		currency: 'PHP',
	}).format(value ? value : 0);
};
