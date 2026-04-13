import { RouterProvider } from 'react-router';
import { routes } from '@/routes';
import { TheAlert, TheLoaderDefault } from '@/shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProvider, ThemeProvider } from '@/providers';
import { Suspense } from 'react';
import { usePlayerSync } from '@/shared/hooks';
import { resetAlert } from '@/shared/models';

function App() {
	usePlayerSync();
	const alert = useSelector((state) => state.alert);
	const dispatch = useDispatch();

	const reset = () => dispatch(resetAlert());
	return (
		<AuthProvider>
			<ThemeProvider>
				{alert.show && (
					<TheAlert show succeeded={alert.succeeded} message={alert.message} onClose={reset} />
				)}
				<Suspense fallback={<TheLoaderDefault />}>
					<RouterProvider router={routes} />
				</Suspense>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
