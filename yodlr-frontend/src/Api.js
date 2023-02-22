import axios from 'axios';

const BASE_API_URL = 'http://localhost:3000/users';

/* 
  The Yodlr JSON store server will give you CRUD endpoints on users.

  This class is needed for building the features of Yodlr.
*/

class YodlrApi {
	// static async request(endpoint, data = {}, method = 'get') {
	// 	console.debug('API Call:', endpoint, data, method);

	// 	//there are multiple ways to pass an authorization token, this is how you pass it in the header.
	// 	//this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
	// 	// const url = `${BASE_API_URL}/${endpoint}`;
	// 	const params = method === 'get' ? data : {};

	// 	try {
	// 		return (await axios({ endpoint, method, data, params })).data;
	// 	} catch (err) {
	// 		console.error('API Error:', err.response);
	// 		let message = err.response.data.error.message;
	// 		// throw Array.isArray(message) ? message : [ message ];
	// 		return message;
	// 	}
	// }

	// gets all users for admin page
	static async getAllUsers() {
		const users = await axios.get(`${BASE_API_URL}`);
		// console.log(users);
		return users.data;
	}

	// creates new user on registration submission
	// static async createNewUser(data) {
	// 	await this.request(`${BASE_API_URL}/`, data, 'post');
	// }
	static async createNewUser(data) {
		return await axios.post(`${BASE_API_URL}/`, {
			email: `${data.email}`,
			firstName: `${data.firstName}`,
			lastName: `${data.lastName}`
		});
	}

	// deletes user from admin page
	static async deleteUser(id) {
		return await axios.delete(`${BASE_API_URL}/${id}`);
	}

	static async updateUserStatus(user, status) {
		return status === 'pending'
			? await axios.put(`${BASE_API_URL}/${user.id}`, {
					id: `${user.id}`,
					email: `${user.email}`,
					firstName: `${user.firstName}`,
					lastName: `${user.lastName}`,
					state: 'active'
				})
			: await axios.put(`${BASE_API_URL}/${user.id}`, {
					id: `${user.id}`,
					email: `${user.email}`,
					firstName: `${user.firstName}`,
					lastName: `${user.lastName}`,
					state: 'pending'
				});
		// return await axios.put(`${BASE_API_URL}/${user.id}`, {
		// 	id: `${user.id}`,
		// 	email: `${user.email}`,
		// 	firstName: `${user.firstName}`,
		// 	lastName: `${user.lastName}`,
		// 	state: `${status}`
		// });
	}
}

export default YodlrApi;
