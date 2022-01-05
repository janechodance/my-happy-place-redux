import {Route, Routes} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react"
import Signup from "./Signup";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Login from "./Login";
import Cart from './Cart';
import MyCalendar from './Calender';
import Subscription from './Subscription';
import Allstore from './Allstore';
import Order from './Order';
import Yourstore from './Yourstore';
import CustomerCalendar from './CalenderCustomer';

function App() {
  const [user, setUser]= useState()
  const [loggedInUser, setLoggedInUser]= useState(false)
  const [userId, setUserId] = useState()
  let navigate = useNavigate()
  useEffect(()=>{
    fetch(`users/${userId}`)
    .then(resp => resp.json())
    .then(data=>{
        console.log(data)
        setUser(data)
        {userId !== undefined? setLoggedInUser(true): setLoggedInUser(false)}
        console.log("rerender")
    });
  },[userId]);

  useEffect(() => {
    fetch('/me')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(user => {
          setUser(user);
          setLoggedInUser(true);
        });
      }else{
        navigate('/')
      }
    });
  }, []);
 
  return (
    <div className="App">
      <header className="App-header">
      My Happy Place
      </header>
      <div>
        <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setUser={setUser} user={user}/>
        <Routes>
        <Route path='/signup' element={<Signup setUserId={setUserId} />} />
        <Route path='/login' element={<Login setUser={setUser} setLoggedInUser={setLoggedInUser} setUserId={setUserId}/>} />
        <Route path='/dashboard' element={<Dashboard user={user} loggedInUser={loggedInUser}/>} />
        <Route path='/' element={<Allstore user={user}/>} />
        {loggedInUser? <>
        <Route path='/profile' element={<Profile user={user}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/subscription' element={<Subscription user={user} />} />
        <Route path='/order' element={<Order/>} /> 
        {user.is_vendor ===true ?<Route path='/yourstore' element={<Yourstore id={user.id}/>}/>: null}
        {user.is_vendor ===true? <Route path='/calendar' element={<MyCalendar user={user}/>} />: <Route path='/calendar' element={<CustomerCalendar user={user}/>} />}
        </>: null}
        </Routes>
        </div>
    </div>
  );
}

export default App;
