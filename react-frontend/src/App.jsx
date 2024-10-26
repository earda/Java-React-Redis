import { useEffect,useState } from 'react' 
import './App.css'
import axios from 'axios';

const BASE_URL = "http://localhost:8080" ;

function App() {
  // eslint-disable-next-line no-undef
  const [users, setUsers] = useState([]);
  const getAllUsers= async()=>{
    try {
      const response = await axios.get(BASE_URL + "/user");
      setUsers(response.data); // Veriyi state'e kaydettik.
    } catch (error) {
      console.error("Veri çekilirken hata oluştu:", error);
    }
  }
 /* const getElementById= async(response.data.)=>{
    const response = await axios.get(BASE_URL+"/user");
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
          <li key='1'>{user.email}</li> // Kullanıcı isimlerini liste halinde gösteriyoruz.
        ))}
      </ul>
      </div> 
  )
}

export default App
