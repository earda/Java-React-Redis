import { useEffect ,useState } from 'react' 
import './App.css'
import axios from 'axios'; 

const BASE_URL = "http://localhost:8080" ;

function App() { 
  const [users, setUsers] = useState([]);
  const getAllUsers= async()=>{ 
      const response = await axios.get(BASE_URL + "/user");
      setUsers(response.data);  
  }
/*  const getElementById= async(userId)=>{
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    setUsers( response.data);
  } 
  const getById = async()=>{
    const response = await getElementById(2);
    console.log(response.data);
  }*/

  
  useEffect(()=>{// component ilk yuklendiginde methodun icindeki fonksiyonu calistir.
    getAllUsers(); 
  },[])

  return (
   
      <div>
       <h1>Users</h1>
       <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Kullanıcı isimlerini liste halinde gösteriyoruz.
        ))}
      </ul>
      </div> 
  )
}
 
export default App

