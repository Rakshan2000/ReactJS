import { useState } from "react";
import Form from "../common-form";
import { signInFormElements } from "../../../config";

function RegisterComponent(){

    const [signupformdata, setsignupformdata] = useState({
        Username: '',
        Email: '',
        Password: '',
    });

    function onHandleSubmit(event){
        event.preventDefault();
        console.log(signupformdata, "Sign Up Form Data")
    }
    return(
    <div>
           <h1>Registation Form</h1> 
           <Form
           formControls={signInFormElements}
           FormData={signupformdata}
           setFormData={setsignupformdata}
           ButtonName={'Register'}
           SubmitForm={onHandleSubmit}
           />
    </div>
    );
}

export default RegisterComponent;
