import { useContext } from "react";
import Form from "../../components/common-form";
import { signInFormElements } from "../../config";
import { AuthContext } from "../../components/context";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebaseConfig";

function registerPage() {
  const {
    RegisterUser,
    setRegisterUser,
    firebaseRegisterAuthentication,
    setCurrentUser,
    currentUser,
    loading,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loading) return <h3>Info still loading. Please wait...</h3>;

  if (currentUser) navigate("/profile");

  function onHandleRegisterSubmit(event) {
    event.preventDefault();

    firebaseRegisterAuthentication()
      .then((result) => {
        console.log(result);
        if (result.user) {
          updateProfile(result.user, {
            displayName: RegisterUser.Username,
          }).then(() => {
            console.log(RegisterUser.Username),
              console.log(auth.currentUser.displayName, "display Name");
          });
          setCurrentUser(result.user);
          if (auth.currentUser.displayName) {
            setLoading(false), navigate("/profile");
          }
        }
      })
      .catch((error) => console.log(error, "This is error"));
  }

  return (
    <>
      <h1 className="text-sm p-5">Register Page</h1>
      <Form
        formControls={signInFormElements}
        FormData={RegisterUser}
        setFormData={setRegisterUser}
        ButtonName={"Register"}
        SubmitForm={onHandleRegisterSubmit}
      />
    </>
  );
}

export default registerPage;
