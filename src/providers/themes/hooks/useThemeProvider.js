import { ThemeContext } from '@/providers';
import React, { useContext } from 'react';

export const useThemeProvider = () => useContext(ThemeContext);
