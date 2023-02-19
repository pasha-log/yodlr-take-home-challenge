import './App.css';
import { BrowserRouter } from 'react-router-dom';
import YodlrRoutes from './Routes';
import NavBar from './NavBar';
import YodlrApi from './Api';
// import { useEffect, useState } from 'react';

function App() {
	const createNewUser = async (data) => {
		let response = await YodlrApi.createNewUser(data);
		console.log(response);
		// if (response.token) {
		// 	setValue({ token: response.token, username: username });
		// 	return true;
		// } else {
		// 	return response;
		// }
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
