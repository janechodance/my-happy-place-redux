import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
function Login({setUserId, setLoggedInUser}) {
  let navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
    });
  function handleLoginChange(event) {
  setLoginFormData({...loginFormData, [event.target.name]: event.target.value});
    }
  function handleLogin(event) {
    event.preventDefault();
    fetch('/login', { 
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginFormData)
  })
  .then(resp => resp.json())
  .then(data => {
      if (data.id ===undefined){
        alert("Please enter your username and password again!")
        navigate("/login")
        setLoginFormData({
          username: '',
          password: ''
        })
      }else{
        console.log(data.id)
        setUserId(data.id)
        setLoginFormData({
            username: '',
            password: ''
        });
        navigate("/dashboard");
      }
  });
}
    return (
      <div>
       <h2>Log in</h2>
       <form className="login_form_container" onSubmit={handleLogin}>
                <label> Username: </label>
                <label>
                <input 
                    type='text'
                    name='username'
                    value={loginFormData.username}
                    onChange={handleLoginChange}
                    placeholder="username"
                />
                </label>
                <label> Password: </label>
                <label>
                <input
                    type='password'
                    name='password'
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    placeholder="password"
                />
                </label>
                <label>
                <input
                    type='submit'
                />
                </label>
            </form>
      </div>
    );
  }
  
  export default Login;