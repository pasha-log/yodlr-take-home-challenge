import axios from 'axios';

const BASE_API_URL = 'http://localhost:3000/users';

/* 
  The Yodlr JSON store server will give you CRUD endpoints on users.

  This class is needed for building the features of Yodlr.
*/

class YodlrApi {
	// gets all users for admin page
	static async getAllUsers() {
		const users = await axios.get(`${BASE_API_URL}`);
		return users.data;
	}

	// creates new user on registration submission
	static async createNewUser(data) {
		return data.email && data.firstName && data.lastName !== ''
			? await axios.post(`${BASE_API_URL}/`, {
					email: `${data.email}`,
					firstName: `${data.firstName}`,
					lastName: `${data.lastName}`
				})
			: false;
	}

	// deletes user from admin page
	static async deleteUser(id) {
		return await axios.delete(`${BASE_API_URL}/${id}`);
	}

	// updates user status
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
	}
}

export default YodlrApi;
