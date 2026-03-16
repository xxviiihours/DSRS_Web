export const getDaisyUIColor = (colorName) => {
	if (typeof window === 'undefined') return '#000000';

	return (
		getComputedStyle(document.documentElement).getPropertyValue(colorName).trim() || '#000000'
	);
};
