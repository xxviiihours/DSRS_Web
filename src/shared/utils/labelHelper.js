export const formatLabel = (str) => {
	const text = str.replace(/([A-Z])/g, ' $1');
	return text.charAt(0).toUpperCase() + text.slice(1);
};
