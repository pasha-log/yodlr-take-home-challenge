import { useState } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import YodlrApi from './Api';

const User = ({ user, deleteUser }) => {
	const [ status, setStatus ] = useState(false);

	const updateUserStatus = async (user, state) => {
		await YodlrApi.updateUserStatus(user, state);
		// setStatus(user.state);
	};

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	return user.state === 'pending' ? updateUserStatus(user, 'pending') : updateUserStatus(user, 'active');
	// }

	return (
		<tr key={user.id}>
			<th scope="row">{user.id}</th>
			<td>{user.firstName}</td>
			<td>{user.lastName}</td>
			<td>{user.email}</td>
			<td>
				<Form>
					<FormGroup switch>
						{/* <Input type="switch" role="switch" /> */}
						<Input
							type="switch"
							checked={status}
							onClick={() => {
								setStatus(!status);
							}}
						/>
						<Label check>{user.state}</Label>
					</FormGroup>
				</Form>
			</td>
			<td>
				<Button onClick={() => deleteUser(user.id)} color="danger" size="sm">
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default User;
