import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/custom.css';
import './styles/global.css';
import App from '@/App';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
