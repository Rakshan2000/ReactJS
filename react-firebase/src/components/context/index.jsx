import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../../firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextState({ children }) {
  const [RegisterUser, setRegisterUser] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const [LoginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function firebaseRegisterAuthentication() {
    const { Email, Password } = RegisterUser;
    return createUserWithEmailAndPassword(auth, Email, Password);
  }

  function firebaseLoginAuthentication(){
    const { Email, Password } = LoginData;

    return signInWithEmailAndPassword(auth, Email, Password);
  }

  function onHandleUserLogOut(){
    return signOut(auth);
  }

  if(loading) <h1>Loading....</h1>

  useEffect(()=>{
    if(currentUser) navigate("/profile"); 
  },[currentUser])

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });

    return () => {
      checkAuthState();
    };
  }, []);

  console.log(currentUser, "user");
  
  return (
    <>
      <AuthContext.Provider
        value={{
          currentUser,
          loading,
          RegisterUser,
          LoginData,
          setRegisterUser,
          firebaseRegisterAuthentication,
          setLoginData,
          firebaseLoginAuthentication,
          setCurrentUser,
          onHandleUserLogOut,
          setLoading
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContextState;
