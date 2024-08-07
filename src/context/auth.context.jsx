import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);

  const authenticateUser = async () => {

    console.log("Attempting to authenticate...")

    
  };

  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser
  }
  return(
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthWrapper };
