import axios from 'axios';

const BASE_API_URL = 'http://localhost:3000/users';
// const BASE_API_URL = 'https://afternoon-sea-08753.herokuapp.com/http://localhost:5000/users';

/* 
  The Yodlr JSON store server will give you CRUD endpoints on users.

  This class is needed for building the features of Yodlr.
*/

class YodlrApi {
	// gets all users for admin page
	static async getAllUsers() {
		// const users = await axios.get(`${BASE_API_URL}`, { headers: { 'Access-Control-Allow-Origin': '*' } });
		const users = await axios.get(`${BASE_API_URL}`);
		console.log(users);
		return users.data;
	}

	// creates new user on registration submission
	static async createNewUser(data) {
		await axios.post(`${BASE_API_URL}/`, {
			email: `${data.email}`,
			firstName: `${data.firstName}`,
			lastName: `${data.lastName}`
		});
	}

	// deletes user from admin page
	static async deleteUser(id) {
		await axios.delete(`${BASE_API_URL}/${id}`);
	}
}

export default YodlrApi;
