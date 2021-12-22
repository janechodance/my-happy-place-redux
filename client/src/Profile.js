import {useEffect, useState} from "react"
function Profile() {
    useEffect(()=>{
        fetch('users/1')
        .then(resp => resp.json())
        .then(data=>{
            setUser(data);
            
        });
    },[]);
    const [user, setUser]= useState()
    return user? (
      <div>
       <h2>Profile</h2>
       <h2>Name: {user.user.name}</h2>
       <img src={user.avatar} height="200px" width="200px" alt='profile'/>
       
      </div>
    ): null
  }
  
  export default Profile;