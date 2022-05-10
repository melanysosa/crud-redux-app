import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUsers from './features/users/AddUsers';
import EditUser from './features/users/EditUser';
import UserList from './features/users/UserList';

function App() {
  return (
		<div className='container h-screen mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
			<h1 className='text-center font-bold text-2xl text-gray-700'>CRUD </h1>
			<Routes>
				<Route path='/' element={<UserList />} />
				<Route path='add-users' element={<AddUsers />} />
				<Route path='/edit-user/:id' element={<EditUser />} />
			</Routes>
		</div>
  );
}

export default App;
