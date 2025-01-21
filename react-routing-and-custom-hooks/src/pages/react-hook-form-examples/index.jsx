import { useState } from "react";
import { useForm } from "react-hook-form";

function ReactHookFormExamplePage() {

  const [password, setPassword] = useState("");


  function evaluatePasswordStrength(password) {
    const specialCharacters = "!@#$%^&*(),.?\":{}|<>"; // Define special characters
    const hasSpecialCharacter = [...password].some(char => specialCharacters.includes(char)); // Check for special characters

    if (password.length < 8) return "Weak";
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && hasSpecialCharacter) {
        return "Strong";
    }
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
        return "Medium";
    }
    return "Weak"; // Default to weak if none of the conditions are met
  }

  const evaluatedPassword = evaluatePasswordStrength(password);
  console.log(evaluatedPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    console.log(errors);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email format : xyz@gmail.com"
              }
            })}
            name="email"
            type="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder", margin: "20px" }}>
              Email is required
            </p>
          ) : errors.email && errors.email.type === "pattern" ? 
          (<p style={{color: "red", fontWeight: "bolder", margin: "20px"}}>
            {errors.email.message}
          </p>): null }
        </div>
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 8,
            })}
            name="password"
            placeholder="Enter Your Password"
            type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          {
                errors.password && errors.password.type === 'required' ?
                <p style={{color: "red", fontWeight: "bolder", margin: "20px"}}>
                    Password is Required
                </p> : errors.password && errors.password.type === 'minLength' ? (
                    <p style={{color: "red", fontWeight: "bolder", margin: "20px"}}>
                        Password mut be at least 8 characters
                    </p>
                ) : null
            }

            <p style={{color: evaluatedPassword === "Strong" ? 'green' : evaluatedPassword === "Medium" ? 'orange' : 'red'}}>{evaluatedPassword}</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ReactHookFormExamplePage;
