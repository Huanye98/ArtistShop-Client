import React from 'react'

function Login() {

  const handleSubmit = ()=>{
    
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="name" />
        <br/>
        <label>Password:</label>
        <input type="Password" />
        <br/>
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Login