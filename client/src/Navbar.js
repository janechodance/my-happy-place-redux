import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
function Navbar({loggedInUser, setLoggedInUser, setUser}) {
  console.log(loggedInUser)
  let navigate = useNavigate();
  function handleLogOut() {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(() => {
        setLoggedInUser(false);
        setUser();
        navigate('/');
    });
}
    return (
      <div>
       <h2>Navbar</h2>
       <Link to='/dashboard'>Dashboard</Link> {'   '}
       <Link to='/all'>All stores</Link> {'   '}
       <Link to='/signup'>Sign up</Link> {'   '}
       {loggedInUser === false ? <Link to='/login'>Log In</Link> : <button onClick={handleLogOut}>Logout</button> }
       {loggedInUser === true? <>
       <Link to='/profile'>Profile</Link> {'   '}
       <Link to='/yourstore'>Your store</Link> {'   '}
       <Link to='/calendar'>Calendar</Link>  {'   '}
       <Link to='/subscription'>Subscription</Link> {'   '}
       <Link to='/order'>Order</Link> {'   '}
       <Link to='/cart'>Cart</Link> 
       </>: null}
      </div>
    );
  }
  
  export default Navbar;