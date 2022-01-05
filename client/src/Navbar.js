import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
function Navbar({loggedInUser, setLoggedInUser, setUser, user}) {
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
       <Link to='/'>All stores</Link> {'   '}
       {loggedInUser === false? <><Link to='/signup'>Sign up</Link> {'   '}</>:null}
       {loggedInUser === false ? <Link to='/login'>Log In</Link> : <button onClick={handleLogOut}>Logout</button>  }
       {loggedInUser === true? <>
        <Link to='/dashboard'>Dashboard</Link> {'   '}
       <Link to='/profile'>Profile</Link> {'   '}
       {user.is_vendor? <><Link to='/yourstore'>Your store</Link> {'   '}</>: null}
       <Link to='/calendar'>Calendar</Link>  {'   '}
       <Link to='/subscription'>Subscription</Link> {'   '}
       <Link to='/email'>Feedback</Link> {'   '}
       <Link to='/order'>Order</Link> {'   '}
       <Link to='/cart'>Cart</Link> 
       </>: null}
      </div>
    );
  }
  
  export default Navbar;