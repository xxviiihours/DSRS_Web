export const currencyFormat = (value) => {
	return new Intl.NumberFormat('en-PH', {
		style: 'currency',
		currency: 'PHP',
	}).format(value ? value : 0);
};
export const compactCurrency = (num) => {
	if (!num) return '₱0';

	return new Intl.NumberFormat('en-PH', {
		style: 'currency',
		currency: 'PHP',
		notation: 'compact',
		maximumFractionDigits: 2,
	}).format(num);
};

export const dateFormat = (isoDateString) => {
	if (!isoDateString) return '';

	const date = new Date(isoDateString);
	return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};

export const dateShortFormat = (isoDateString) => {
	if (!isoDateString) return '';

	const date = new Date(isoDateString);
	return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const timeFormat = (isoDateString) => {
	if (!isoDateString) return '';

	const date = new Date(isoDateString);
	return date.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	});
};
