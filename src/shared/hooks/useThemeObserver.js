import { useThemeProvider } from '@/providers/themes/hooks/useThemeProvider';
import { getDaisyUIColor } from '@/shared/utils/colorHelper';
import React, { useEffect, useState } from 'react';

const useThemeObserver = () => {
	const { theme } = useThemeProvider();
	const [primary, setPrimary] = useState('#000');

	useEffect(() => {
		const updateColors = () => {
			setPrimary(getDaisyUIColor('--color-base-content'));
		};
		updateColors();

		const observer = new MutationObserver(updateColors);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme'],
		});

		return () => observer.disconnect();
	}, [theme]);

	return { primary, setPrimary };
};

export default useThemeObserver;
