import React from 'react'
import { Link } from 'react-router-dom'
function StoreNav() {
  return (
    <div className='flex gap-4'>
      <h2>StoreNav</h2>
      <Link to={"/"}>
      <h3>Home</h3>
      </Link>
      <Link to={"/store"}>
      <h3>Store</h3>
      </Link>
      <Link to={"/login"}>
      <h3>Login</h3>
      </Link>
      <Link to={"/signup"}>
      <h3>SignUp</h3>
      </Link>
      <Link to={"/admin"}>
      <h3>Admin</h3>
      </Link>
      <Link to={"/profile"}>
      <h3>Profile</h3>
      </Link>
    </div>
  )
}

export default StoreNav