import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import TextField from '../../components/textField/TextField';
import { v4 as uuidv4 } from 'uuid';
import { addUser } from '../../redux/userSlice';

const AddUsers = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [values, setValues] = useState({
		name: '',
		email: '',
	});
	const handleAddUser = () => {
		setValues({ name: '', email: '' });
		dispatch(
			addUser({
				id: uuidv4(),
				name: values.name,
				email: values.email,
			})
		);
		console.log(values);
		navigate('/');
	};
	return (
		<div className='mt-10 max-w-xl mx-auto'>
			<TextField
				label={'Name'}
				value={values.name}
				onChange={(e) => setValues({ ...values, name: e.target.value })}
				inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
			/>
			<TextField
				label={'Email'}
				value={values.email}
				onChange={(e) => setValues({ ...values, email: e.target.value })}
				inputProps={{ type: 'email', placeholder: 'jhondoe@email.com' }}
			/>
			<Button onClick={handleAddUser}>Submit</Button>
		</div>
	);
};

export default AddUsers;
