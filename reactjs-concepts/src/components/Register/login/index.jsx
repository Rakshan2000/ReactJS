import { useState } from 'react';
import { loginFormElements } from '../../../config';
import Form from '../common-form';

function LoginComponent(){

    const [loginformdata, setloginformdata] = useState({
        Email : '',
        Password : ''
    });

    //console.log(loginformdata, "loginFormData");
    

    function onHandleSubmit(event){
        event.preventDefault();
        console.log(loginformdata, "loginFormData");
    }
    

    return(
        <div>
            <h1>Login Page/Component</h1>
            {/* <commonForm
            formControls={loginFormElements} 
            loginFormData={loginformdata}
            setLoginFormData={setloginformdata}/> */}

            <Form
            formControls={loginFormElements} 
            FormData={loginformdata}
            setFormData={setloginformdata}
            ButtonName={'Login'}
            SubmitForm={onHandleSubmit}
            />
        </div>
    );
}

export default LoginComponent;