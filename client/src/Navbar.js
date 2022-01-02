import {Link} from 'react-router-dom';
function Navbar(loggedInUser) {
  console.log(loggedInUser)
    return (
      <div>
       <h2>Navbar</h2>
       <Link to='/dashboard'>Dashboard</Link> {'   '}
       <Link to='/all'>All stores</Link> {'   '}
       <Link to='/signup'>Sign up</Link> {'   '}
       <Link to='/login'>Log in</Link> {'   '}
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