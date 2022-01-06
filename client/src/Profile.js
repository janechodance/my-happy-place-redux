import {useState} from "react"
function Profile({user, setRefresh, refresh}) {
   console.log(user)
   const [upload, setUpload]= useState(false)
   const [change, setChange]= useState(null)
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
  function changeAvatar(event){
    event.preventDefault()
    console.log(change)
    const formData = new FormData()
    formData.append('user_id', user.id)
    formData.append('avatar', avatar)
    fetch(`/profilepics/${change}`,{
      method: 'PATCH',
      body: formData
    })
    .then(resp => resp.json())
    .then(data => {console.log(data)
      setAvatar(null)
      setRefresh(!refresh)})
  }
    return user? (
      <div className="profile_box">
      <div className="profile">
       <h2>Profile</h2>
       {user.profilepic !== null ? <><img className="profile_pic" src={user.profilepic.avatar} height="200px" width="200px" alt='profile'/><button onClick={()=>setChange(user.profilepic.id)}>Change Profile Picture</button></> : <button onClick={()=>setUpload(!upload)}>Upload Profile Picture </button>}
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
        {change!==null? <><form onSubmit={changeAvatar}>
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
      </div>
    ): null
  }
  
  export default Profile;