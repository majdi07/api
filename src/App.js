
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import UserDetails from './pages/UserDetails/UserDetails';
function App() {
  const [users, setUsers] = useState([])
  const [laoding, setLaoding] = useState(true)


  useEffect(() => {
    const data1 = axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data)
        // .then((json) => console.log(json));
        setUsers(res.data)
        setLaoding(false)
      }).catch((err) => console.log("err"))
  }, [])



  // console.log(getUser())

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home users={users} laoding={laoding} />} />
        <Route path='/userDetails/:id' element={<UserDetails />} />

      </Routes>

    </div>
  );
}

export default App;
