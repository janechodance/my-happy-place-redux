import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
function Navbar({loggedInUser, setLoggedInUser, setUser, user, number}) {
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
        {loggedInUser === true?<h2 className='greeting'>Hello {user.name}!</h2>:null}
      <div className='NavBar'>
       
       <Link to='/'><button>All stores</button></Link> {'   '}
       
       {loggedInUser === true? <>
        <Link to='/dashboard'><button>Dashboard</button></Link> {'   '}
       <Link to='/profile'><button>Profile</button></Link> {'   '}
       {user.is_vendor? <><Link to='/yourstore'><button>Your store</button></Link> {'   '}</>: null}
       <Link to='/calendar'><button>Calendar</button></Link>  {'   '}
       <Link to='/subscription'><button>Subscription</button></Link> {'   '}
       <Link to='/email'><button>Feedback</button></Link> {'   '}
       <Link to='/order'><button>Orders</button></Link> {'   '}
       <Link to='/cart'><button>Cart {number}</button></Link> {'   '}
       </>: null}
       {loggedInUser === false? <><Link to='/signup'><button>Sign up</button></Link> {'   '}</>:null}
       {loggedInUser === false ? <Link to='/login'><button>Log In</button></Link> : <button onClick={handleLogOut}>Logout</button>  }
      </div>
      </div>
    );
  }
  
  export default Navbar;