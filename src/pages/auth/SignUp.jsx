import { React, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import service from "../../service/service.config"

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate()

  const handleUsername = (event)=>{setUsername(event.target.value)}
  const handlePassword = (event)=>{setPassword(event.target.value)}
  const handleEmail = (event)=>{setEmail(event.target.value)}
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const newUser = {
      email,
      username,
      password,
    }
    try {
      await service.post("/auth/signup",newUser)
      navigate("/login")
    } catch (error) {
      console.log(error)
      if(error.response && error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
      }else{
        navigate("/error500")
      }
    }
  };

  return (
    <div >
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsername} />
        <br />
        <label>email:</label>
        <input type="email" value={email} onChange={handleEmail}/>
        <br />
        <label>Password:</label>
        <input type="Password" value={password} onChange={handlePassword}/>
        <br />
        <button type="submit">Submit</button>

        {errorMessage && <p>{errorMessage}</p>}
        
      </form>
    </div>
  );
}

export default SignUp;
