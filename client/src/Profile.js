import {useState} from "react"
function Profile({user}) {
   console.log(user)
   const [upload, setUpload]= useState(false)
   const [avatar, setAvatar]= useState(null)
   function handleAvatarChange(event){
    setAvatar(event.target.files[0]);
  }
  function uploadAvatar(event){
    event.preventDefault()
    console.log(avatar)
    console.log(user.id)
    const formData = new FormData()
    formData.append('user_id', user.id)
    formData.append('avatar', avatar)
    fetch('/profilepics', {
      method: 'POST',
      body: formData
    })
    setAvatar(null)
    
  }
    return user? (
      <div>
       <h2>Profile</h2>
       {user.profilepic !== null ? <img src={user.profilepic.avatar} height="200px" width="200px" alt='profile'/> : <button onClick={()=>setUpload(!upload)}>Upload Profile Picture </button>}
       {upload? <><form onSubmit={uploadAvatar}>
                <label> Profile Picture: </label>
                <label>
                <input
                    type='file'
                    name='avatar'
                    onChange={handleAvatarChange}
                />
                </label>
                <input
                    type='submit'
                />
                </form></>: null}
       <h2>Name: {user.name}</h2>
       <h2>Email: {user.email}</h2>
       <h2>Phone: {user.phone}</h2>
       <h2>Address: {user.address}</h2>
       <h2>Date of Birth: {user.DOB}</h2>
       
      </div>
    ): null
  }
  
  export default Profile;