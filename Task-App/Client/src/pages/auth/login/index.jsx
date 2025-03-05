import { loginFormElements } from "@/config";
import { useEffect, useState } from "react";
import Form from "@/components/common-form";
import { loginUser, handleAuth } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Bold } from "lucide-react";

function login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        console.log(isAuthenticated);
        if(isAuthenticated){
            navigate('/');
        }
    },[])

    function onHandleLoginAuthentication(event) {
        event.preventDefault();
        dispatch(loginUser(LoginData)).unwrap()
        .then((response) => {
            console.log('Login successful:', response);
          toast.success('Login Successful', {
            style: {
              backgroundColor: 'green',
              color: 'white'
            }
          }),
          dispatch(handleAuth({ isAuthenticated: true })),
          navigate('/')},
          
        ).catch((error) => {
            console.error('Login failed :', error?.message);
            toast.error(`Login Failed: ${error?.message}`, {
                style: {
                  backgroundColor: 'red',
                  color: 'white',
                  fontWeight: 'Bold',
                }
              }),
              dispatch(handleAuth({ isAuthenticated: false }))},
              )
        }


return (
    <div className="mx-auto border p-5 h-auto">
        <h1 className="p-1 text-lg text-center font-bold mb-3">Login</h1>
        <Form
            formControls={loginFormElements}
            FormData={LoginData}
            setFormData={setLoginData}
            ButtonName={"Login"}
            SubmitForm={onHandleLoginAuthentication}
        />
        <h2>If New User, Please <span onClick={() => navigate('/register')} className="text-blue-500 cursor-pointer">Sign Up</span></h2>
    </div>
);
}

export default login;
