import './App.css';
import { BrowserRouter } from 'react-router-dom';
import YodlrRoutes from './Routes';
import NavBar from './NavBar';
import YodlrApi from './Api';

function App() {
	const createNewUser = async (data) => {
		let response = await YodlrApi.createNewUser(data);
		return response ? true : response;
	};

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<YodlrRoutes createNewUser={createNewUser} />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
