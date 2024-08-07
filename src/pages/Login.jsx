import {React, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handlePassword = (event)=>{setPassword(event.target.value)}
  const handleEmail = (event)=>{setEmail(event.target.value)}
  

  const handleSubmit = (event)=>{
    event.preventDefault()

    const userCredentials = {email,password}

    navigate("/profile")
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmail} />
        <br/>
        <label>Password:</label>
        <input type="Password" value={password} onChange={handlePassword} />
        <br/>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Login