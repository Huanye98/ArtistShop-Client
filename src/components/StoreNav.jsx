import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function StoreNav() {
  const navigate = useNavigate();
  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext);

  console.log(isLoggedIn)
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/store");
  };

  return (
    <div className="flex gap-4 fixed top-0 bg-green-400 w-screen h-7" >

      <h2>StoreNav</h2>

      <Link to={"/"}><h3> Home </h3></Link>
      <Link to={"/store"}><h3>Store</h3></Link>

    {/* if you are not logged in it appears*/}
      {!isLoggedIn && (
        <>
          <Link to={"/login"}><h3>Login</h3></Link>
          <Link to={"/signup"}><h3>SignUp</h3>{" "}</Link>
        </>
      )}

    {/* si está admin o logeado aparece*/}
    {isLoggedIn && (
      <>
        {isAdmin && <Link to={"/admin"}><h3>Admin</h3></Link>}
        {!isAdmin && <Link to={"/profile"}><h3>Profile</h3></Link>}
        {!isAdmin && <Link to={"/cart"}><h3>Cart</h3></Link>}
        <h3 onClick={handleLogout}>Logout</h3>
      </>
    )}
    </div>
  );
}

export default StoreNav;
