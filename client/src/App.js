import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from "react"
import Signup from "./Signup";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Login from "./Login";
import Cart from './Cart';
import Calendar from './Calender';
import Subscription from './Subscription';
import Allstore from './Allstore';
import Order from './Order';

function App() {
  const [user, setUser]= useState()
  useEffect(()=>{
    fetch('users/1')
    .then(resp => resp.json())
    .then(data=>{
        setUser(data);
        
    });
},[]);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {user? <>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile user={user}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/subscription' element={<Subscription user={user} />} />
        <Route path='/all' element={<Allstore/>} />
        <Route path='/order' element={<Order/>} /> 
        </>: null}
       
        </Routes>
      </header>
    </div>
  );
}

export default App;
