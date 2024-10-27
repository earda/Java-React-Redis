/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BASE_URL = "http://localhost:8080" ;

function App() { 
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

   const getAllUsers= async()=>{ 
      const response = await axios.get(BASE_URL + "/user");
      setUsers(response.data);  
  } 
   const getUserById= async(userId)=>{
    const response = await axios.get(`${BASE_URL}+/user/+${userId}`);
    setUsers(response.data);
  }  

  const createUser = async(newUser)=>{
    await axios.post(`${BASE_URL}/user`,newUser);
  }

  
  useEffect(()=>{// component ilk yuklendiginde methodun icindeki fonksiyonu calistir.
    getAllUsers(); 
   // getUserById(1);
    /*const newUser={
        "id": 4,
        "name": "arda",
        "email": "ardart@gmail.com",
        "age": 45
    }
    createUser(newUser);*/
  },[])
  const sortById  = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.id - b.id;
      } else {
        return b.id-a.id;
      }
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  const headerStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px",
  };

  const cellStyle = {
    padding: "8px",
    border: "1px ",
    textAlign: "left",
  };
  return (
   
    <div className="container">
    <h1 className="my-4">Users Table</h1>
    <button className="btn btn-primary mb-3" onClick={sortById}>
        ID'ye Göre Sırala ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
 
export default App

