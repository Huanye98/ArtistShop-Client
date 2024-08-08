import {React, useContext, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/auth.context";
import service from "../../service/service.config";

function Login() {

  const {authenticateUser} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  
  const handlePassword = (event)=>{setPassword(event.target.value)}
  const handleEmail = (event)=>{setEmail(event.target.value)}
  

  const handleSubmit = async(event)=>{
    event.preventDefault()

    const userCredentials = {email,password}

    try {
      const response = await service.post("/auth/login",userCredentials)
      console.log(response)

      localStorage.setItem("authToken", response.data.authToken)

      authenticateUser()

      navigate("/profile")
      
    } catch (error) {
      console.log(error)
      if(error.response && error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
      }else{
        navigate("/error500")
      }
    }
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

        {errorMessage && <p>{errorMessage}</p>}

      </form>

    </div>
  )
}

export default Login