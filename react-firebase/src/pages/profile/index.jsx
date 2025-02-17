import { useContext } from "react";
import { AuthContext } from "../../components/context";

function profilePage(){

    const{currentUser, onHandleUserLogOut} = useContext(AuthContext);



    return(<>
        <h1>Profile Page Page</h1>
        <h1>{currentUser?.displayName}</h1>
        <button onClick={onHandleUserLogOut}>Log Out</button>
    </>);
}
 
export default profilePage;