import './App.css';
import Form from './components/form/form.component';
import Users from './components/users/users.component';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const addUsers = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };
  return (
    <>
      <Form onPost={addUsers}/>
      <Users users={users}/>

    </>
  );
}

export default App;
