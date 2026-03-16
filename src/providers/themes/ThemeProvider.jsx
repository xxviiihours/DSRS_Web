import { ThemeContext } from '@/providers';
import React, { useEffect, useState } from 'react';

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			return localStorage.getItem('dsrs-theme') || 'wight-light';
		}
		return 'wight-light';
	});

	const changeTheme = (newTheme) => {
		setTheme(newTheme);
	};

	useEffect(() => {
		document.documentElement.setAttribute('dsrs-theme', theme);
		localStorage.setItem('dsrs-theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
	);
}

export default ThemeProvider;
