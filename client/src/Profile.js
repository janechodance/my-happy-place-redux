
function Profile({user}) {
   console.log(user)
    return user? (
      <div>
       <h2>Profile</h2>
       <img src={user.avatar} height="200px" width="200px" alt='profile'/>
       <h2>Name: {user.name}</h2>
       <h2>Email: {user.email}</h2>
       <h2>Phone: {user.phone}</h2>
       
      </div>
    ): null
  }
  
  export default Profile;