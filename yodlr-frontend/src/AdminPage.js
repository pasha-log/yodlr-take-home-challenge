import React, { useState, useEffect } from 'react';
import { Table, FormGroup, Input, Button } from 'reactstrap';
import YodlrApi from './Api';

const AdminPage = () => {
	const [ users, setUsers ] = useState();

	console.log(users);
	useEffect(() => {
		async function getAllUsers() {
			let users = await YodlrApi.getAllUsers();
			setUsers(users);
		}
		getAllUsers();
	}, []);

	return (
		<div>
			<Table hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Delete User</th>
						<th>Toggle State</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr> */}
					{/* {users.map((u) => {
						<tr>
							<th scope="row">{u.id}</th>
							<td>{u.firstName}</td>
							<td>{u.lastName}</td>
							<td>{u.email}</td>
							<td>
								<FormGroup switch>
									<Input type="switch" role="switch" />
								</FormGroup>
							</td>
							<td>
								<Button color="danger" size="sm">
									Delete
								</Button>
							</td>
						</tr>;
					})} */}
				</tbody>
			</Table>
		</div>
	);
};

export default AdminPage;
