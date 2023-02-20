import { Input, Button, Form, FormGroup, Col, Container } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import Alert from './Alert';
import './RegistrationForm.css';

const RegistrationForm = ({ createNewUser }) => {
	const [ response, setResponse ] = useState(false);
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			email: '',
			firstName: '',
			lastName: ''
		}
	});

	const onSubmit = async (data) => {
		let success = await createNewUser(data);
		if (success === true) {
			setResponse(true);
		} else {
			setResponse(success);
			reset();
		}
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup row>
					<Col
						md={{
							offset: 3,
							size: 6
						}}
						sm="12"
					>
						<div className="FormContainer">
							<h1>Signup To The Yodlr Portal</h1>
							<div className="Email">
								<Controller
									name="email"
									control={control}
									render={({ field }) => <Input type="email" placeholder="Email" {...field} />}
								/>
							</div>
							<div className="Firstname">
								<Controller
									name="firstName"
									control={control}
									render={({ field }) => <Input placeholder="Firstname" {...field} />}
								/>
							</div>
							<div className="Lastname">
								<Controller
									name="lastName"
									control={control}
									render={({ field }) => <Input placeholder="Lastname" {...field} />}
								/>
							</div>
							{response === true ? <Alert type={'success'} message="Signed up successfully." /> : null}
							{response !== false && response !== true ? (
								<Alert type="danger" message="Something went wrong." />
							) : null}
							<Button className="SignupButton" type="submit" size="lg">
								Submit
							</Button>
						</div>
					</Col>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default RegistrationForm;
