export const getDaisyUIColor = (colorName) => {
	if (typeof window !== 'undefined') {
		// Access the color variable from the document's computed style
		const color = getComputedStyle(document.documentElement).getPropertyValue(colorName);
		return color ? color.trim() : '#000000'; // Default to black if not found
	}
	return '#000000';
};
