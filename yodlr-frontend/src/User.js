import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

const User = ({ user, deleteUser, updateUserStatus }) => {
	return (
		<tr key={user.id}>
			<th scope="row">{user.id}</th>
			<td>{user.firstName}</td>
			<td>{user.lastName}</td>
			<td>{user.email}</td>
			<td>
				<Form>
					<FormGroup switch>
						{user.state === 'pending' ? (
							<Input type="switch" checked={false} onChange={() => updateUserStatus(user, user.state)} />
						) : (
							<Input type="switch" checked={true} onChange={() => updateUserStatus(user, user.state)} />
						)}
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
