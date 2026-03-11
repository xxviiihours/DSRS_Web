import { AuthContext } from '@/providers';
import { useContext } from 'react';

export const useAuthProvider = () => useContext(AuthContext);
