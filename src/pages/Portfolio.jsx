import React from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <div>
      <Link to={"/"}>
      <div>Home</div>
      </Link>
      <Link to={"/store"}>
      <div>Store</div>
      </Link>
      <h2>Portfolio</h2>

    </div>
  )
}

export default Portfolio