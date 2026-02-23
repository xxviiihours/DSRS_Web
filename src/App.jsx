import { RouterProvider } from 'react-router';
import { routes } from './routes';
import PlayerRegisterForm from './features/player/ui/PlayerRegisterForm';
import { useSelector } from 'react-redux';

function App() {
	const player = useSelector((state) => state.player);

	if (!player) return <PlayerRegisterForm />;
	return (
		<>
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
