import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import YodlrApi from './Api';
import User from './User';

const AdminPage = () => {
	const [ deleted, setDeleted ] = useState(0);
	const [ updated, setUpdated ] = useState(0);
	const [ users, setUsers ] = useState([]);

	useEffect(
		() => {
			async function getAllUsers() {
				let users = await YodlrApi.getAllUsers();
				setUsers(Object.values(users));
			}
			getAllUsers();
		},
		[ deleted, updated ]
	);

	const deleteUser = async (id) => {
		await YodlrApi.deleteUser(id);
		setDeleted(deleted + 1);
	};

	const updateUserStatus = async (user, state) => {
		let response = await YodlrApi.updateUserStatus(user, state);
		if (response) {
			console.log(response);
			setUpdated(updated + 1);
		}
	};

	return (
		<div>
			<Table hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Toggle State</th>
						<th>Delete User</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => (
						<User key={u.id} user={u} deleteUser={deleteUser} updateUserStatus={updateUserStatus} />
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default AdminPage;
