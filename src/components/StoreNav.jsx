import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function StoreNav() {
  const navigate = useNavigate();
  const { isloggedIn, authenticateUser, isAdmin } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/store");
  };

  return (
    <div className="flex gap-4">

      <h2>StoreNav</h2>

      <Link to={"/"}><h3> Home </h3></Link>
      <Link to={"/store"}><h3>Store</h3></Link>

    {/* if you are not logged in it appears*/}
      {!isloggedIn && (
        <>
          <Link to={"/login"}><h3>Login</h3></Link>
          <Link to={"/signup"}><h3>SignUp</h3>{" "}</Link>
        </>
      )}

    {/* si está admin o logeado aparece*/}
    {isloggedIn && (
      <>
        {isAdmin && <Link to={"/admin"}><h3>Admin</h3></Link>}
        {!isAdmin && <Link to={"/profile"}><h3>Profile</h3></Link>}
        <h3 onClick={handleLogout}>Logout</h3>
      </>
    )}
    </div>
  );
}

export default StoreNav;
