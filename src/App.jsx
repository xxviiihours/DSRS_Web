import { RouterProvider } from 'react-router';
import { routes } from '@/routes';
import { AuthProvider } from '@/providers';
import { usePlayerSync } from '@/shared';

function App() {
	usePlayerSync();

	return (
		<AuthProvider>
			<RouterProvider router={routes} />
		</AuthProvider>
	);
}

export default App;
