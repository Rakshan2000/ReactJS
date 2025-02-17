import { useContext } from "react";
import { AuthContext } from "../../components/context";
import { Navigate } from "react-router-dom";

function AuthPage({children}){

    const {currentUser, loading} = useContext(AuthContext);

    if(loading) return <h3>Info still loading. Please wait...</h3>

    if(currentUser) return children;



    return <Navigate to={"/login"}/>
}

export default AuthPage;