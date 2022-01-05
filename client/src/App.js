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
import Email from './Email';

function App() {
  const [user, setUser]= useState()
  const [loggedInUser, setLoggedInUser]= useState(false)
  const [userId, setUserId] = useState()
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false)
  let navigate = useNavigate()
  useEffect(()=>{
    fetch(`users/${userId}`)
    .then(resp => resp.json())
    .then(data=>{
        console.log(data)
        setUser(data)
        setLoggedInUser(true)
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
  }, [refresh]);
  function onAdd(item){
    const exist = cartItems.find((cart) => cart.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id ? { ...exist, qty: exist.qty + 1 , total_price: exist.price*(exist.qty+1)} : cart
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 , total_price: item.price}]);
    }
  }
  function onRemove(item){
    const exist = cartItems.find((cart) => cart.id === item.id)
    if (exist.qty === 1){
      setCartItems(cartItems.filter((cart) => cart.id !== item.id))
    }else {
      setCartItems(
        cartItems.map((cart) =>
          cart.id === item.id ? { ...exist, qty: exist.qty - 1, total_price: exist.price*(exist.qty-1) } : cart
        )
      )
    }
  }
  
 
  return (
    <div className="App">
      <header className="App-header">
      My Happy Place
      </header>
      <div>
        <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setUser={setUser} user={user} number={cartItems.length}/>
        <Routes>
        <Route path='/signup' element={<Signup setUserId={setUserId} />} />
        <Route path='/login' element={<Login setUser={setUser} setLoggedInUser={setLoggedInUser} setUserId={setUserId}/>} />
        <Route path='/' element={<Allstore user={user} loggedInUser={loggedInUser} setRefresh={setRefresh} refresh={refresh}/>} />
        {loggedInUser? <>
        <Route path='/dashboard' element={<Dashboard user={user} loggedInUser={loggedInUser} onAdd={onAdd}/>} />
        <Route path='/profile' element={<Profile user={user}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} user={user} setCartItems={setCartItems}/>} />
        <Route path='/subscription' element={<Subscription user={user} />} />
        <Route path='/order' element={<Order user={user}/>} /> 
        <Route path='/email' element={<Email user={user}/>}/>
        {user.is_vendor ===true ?<Route path='/yourstore' element={<Yourstore id={user.id}/>}/>: null}
        {user.is_vendor ===true? <Route path='/calendar' element={<MyCalendar user={user}/>} />: <Route path='/calendar' element={<CustomerCalendar user={user}/>} />}
        </>: null}
        </Routes>
        </div>
    </div>
  );
}

export default App;
