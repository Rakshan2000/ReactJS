import { signInFormElements } from "@/config";
import { useState } from "react";
import Form from "@/components/common-form";
import { registerUser, handleAuth } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerStatus = useSelector((state) => state.auth.registerStatus);
  const registerError = useSelector((state) => state.auth.registerError);

  const [RegisterData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onHandleRegisterAuthentication(event) {
    event.preventDefault();
    console.log("Register");
    dispatch(registerUser(RegisterData))
      .unwrap()
      .then((response) => {
        toast.success(`Registration Successful`, {
          style: {
            backgroundColor: 'green',
            color: 'white'
          }
        });
        dispatch(handleAuth({ isAuthenticated: true }));
        navigate('/');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle error (e.g., show error message)
        toast.error(`Registration Failed: ${error?.message}`, {
          style: {
            backgroundColor: 'red',
            color: 'white'
          }
        });
        dispatch(handleAuth({ isAuthenticated: false }));
      });
  }

  return (
    <div className="mx-auto border p-5">
      <h1 className="p-1 text-lg text-center font-bold mb-3">Register</h1>
      <Form
        formControls={signInFormElements}
        FormData={RegisterData}
        setFormData={setRegisterData}
        ButtonName={"Register"}
        SubmitForm={onHandleRegisterAuthentication}
      />
      <h2>Already User? Please <span onClick={() => navigate('/auth/login')} className="text-blue-500 cursor-pointer">Login In</span></h2>
      {registerStatus === 'loading' && <p>Loading...</p>}
      
    </div>
  );
}

export default Register;
