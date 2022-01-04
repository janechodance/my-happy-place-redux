import {useState} from "react"
import {useNavigate} from "react-router-dom";
function Signup({setUserId}) {
    let navigate = useNavigate();
    const [signupFormData, setSignupFormData] = useState({
      username: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      DOB: '',
      is_vendor: ''
    });
    const [avatar, setAvatar]= useState(null)
    function handleSignupChange(event) { 
      setSignupFormData({...signupFormData, [event.target.name]: event.target.value});
     }
    function handleAvatarChange(event){
      setAvatar(event.target.files[0]);
    }
    function handleSignup(event){
      event.preventDefault();
      console.log(signupFormData)
      fetch('/users', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupFormData)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        setSignupFormData({
          username: '',
          password: '',
          name: '',
          email: '',
          phone: '',
          address: '',
          DOB: '',
          is_vendor: ''
        });
        uploadAvatar(avatar, data)
        navigate("/dashboard");
    ;
    })}
    function uploadAvatar(avatar, data){
      console.log(avatar)
      const formData = new FormData()
      formData.append('user_id', data.id)
      formData.append('avatar', avatar)
      fetch('/profilepics', {
        method: 'POST',
        body: formData
      })
      setAvatar(null)
      
    }
    
    return (
      <div>
       <h2>Sign up</h2>
       <form className="sign_up_form_container" onSubmit={handleSignup}>
                <label> Username: </label>
                <label>
                <input
                    type='text'
                    name='username'
                    value={signupFormData.username}
                    onChange={handleSignupChange}
                    placeholder="username"
                />
                <label> Password: </label>
                <label>
                <input
                    type='password'
                    name='password'
                    value={signupFormData.password}
                    onChange={handleSignupChange}
                    placeholder="password"
                />
                </label>
                {/* <label> Confirm Password </label>
                <label> 
                <input
                    type='password'
                    name='confirm'
                    value={signupFormData.confirm}
                    onChange={handleSignupChange}
                    placeholder="confirm password"
                />
                </label> */}
                </label>
                <label> Full name: </label>
                <label> 
                <input
                    id="name"
                    type='text'
                    name='name'
                    value={signupFormData.name}
                    onChange={handleSignupChange}
                    placeholder="full name"
                />
                </label>
                <label> Email: </label>
                <label>
                <input
                    type='text'
                    name='email'
                    value={signupFormData.email}
                    onChange={handleSignupChange}
                    placeholder="email"
                />
                </label>
                <label> Phone: </label>
                <label>
                <input
                    type='text'
                    name='phone'
                    value={signupFormData.phone}
                    onChange={handleSignupChange}
                    placeholder="phone number"
                />
                </label>
                <label> Address: </label>
                <label>
                <input
                    type='text'
                    name='address'
                    value={signupFormData.address}
                    onChange={handleSignupChange}
                    placeholder="address"
                />
                </label>
                <label> Date of Birth: </label>
                <label>
                <input
                    type='date'
                    name='DOB'
                    value={signupFormData.DOB}
                    onChange={handleSignupChange}
                    placeholder="date of birth"
                />
                </label>
                <label> Are you a vendor? </label>
                <label> 
                <select name='is_vendor' value={signupFormData.is_vendor} onChange={handleSignupChange}>
                    <option value={null}>Are you a vendor?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                </label>
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
            </form>
       
      </div>
    );
  }
  
  export default Signup;