import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { handleAuth } from "@/store/slices/auth";
import Cookies from "js-cookie";


function AuthPage({ children }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("AccessToken");
    if (token) {
      dispatch(handleAuth({ isAuthenticated: true }));
    }
    else{
        dispatch(handleAuth({ isAuthenticated: false }));
    }
    setLoading(false);
  }, [dispatch]);


  if (loading) {
    return <div>Loading...</div>; // Or any loading indicator
  }
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return children; 
  }

  return <Navigate to={"/auth/login"} />;
}

export default AuthPage;