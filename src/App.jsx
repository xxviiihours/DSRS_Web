import { RouterProvider } from 'react-router';
import { routes } from '@/routes';
import { AuthProvider } from '@/providers';
import { resetAlert, TheAlert, usePlayerSync } from '@/shared';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	usePlayerSync();
	const alert = useSelector((state) => state.alert);
	const dispatch = useDispatch();

	const reset = () => dispatch(resetAlert());
	return (
		<AuthProvider>
			{alert.show && (
				<TheAlert show succeeded={alert.succeeded} message={alert.message} onClose={reset} />
			)}
			<RouterProvider router={routes} />
		</AuthProvider>
	);
}

export default App;
