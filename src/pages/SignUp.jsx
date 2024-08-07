import React from 'react'

function SignUp() {



  const handleSubmit = ()=>{

  }

  return (
    <div className=''>
       <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="name" />
        <br/>
        <label>email:</label>
        <input type="email" />
        <br/>
        <label>Password:</label>
        <input type="Password" />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp