import { useContext, useState } from "react";
import Form from "../../components/common-form";
import { loginFormElements } from "../../config";
import { AuthContext } from "../../components/context";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebaseConfig";



function loginPage() {
  const { LoginData, setLoginData, firebaseLoginAuthentication, setCurrentUser} =
    useContext(AuthContext);

 const navigate = useNavigate();

  function onHandleLoginAuthentication(event) {
    event.preventDefault();

    firebaseLoginAuthentication()
      .then((result) => {
        console.log(result, "This is result");
        if(result.user){
            updateProfile(result.user,{
                displayName : auth.currentUser.name,
            })
            setCurrentUser(result.user);
            navigate('/profile');
        }
      })
      .catch((error) => console.log(error, "This is a Error"));
  }
  return (
    <>
      <h1>Login Page</h1>
      <Form
        formControls={loginFormElements}
        FormData={LoginData}
        setFormData={setLoginData}
        ButtonName={"Login"}
        SubmitForm={onHandleLoginAuthentication}
      />
    </>
  );
}

export default loginPage;
