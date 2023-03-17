import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import {useState} from 'react'
import UserList from './components/Users/UserList';

function App(props) {
const [usersList,setUserList]=useState([])
  const addUserHandler=(uName,uAge)=>{
    setUserList((prevUsers)=>{
      return [{
        userName:uName,
        userAge:uAge,
        id:Math.random().toString()
      },...prevUsers]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
