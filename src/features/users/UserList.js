import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import { deleteUser } from '../../redux/userSlice';

const UserList = () => {
	const users = useSelector((store) => store.users);
	const dispatch = useDispatch();
	const handleRemoveUser = (id) => {
		dispatch(deleteUser({ id }));
	};

	const renderCard = () =>
		users.map((user) => (
			<div
				key={user.id}
				className='bg-gray-300 p-5 flex items-center justify-between'
			>
				<div>
					<h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
					<span className='font-normal text-gray-600'>{user.email}</span>
				</div>

				<div className='flex gap-4'>
					<Link to={`edit-user/${user.id}`}>
						{' '}
						<button>
							<AiOutlineEdit />{' '}
						</button>
					</Link>
					<button onClick={() => handleRemoveUser(user.id)}>
						<AiOutlineDelete />{' '}
					</button>
				</div>
			</div>
		));

	return (
		<div>
			<Button>
				<Link to={'/add-users'}> Add user</Link>
			</Button>

			<div className='grid gap-5 md:grid-cols-2'>
				{users.length ? (
					renderCard()
				) : (
					<p className='text-center col-span-2 text-gray-700 font-semibold'>
						No User
					</p>
				)}
			</div>
		</div>
	);
};

export default UserList;
