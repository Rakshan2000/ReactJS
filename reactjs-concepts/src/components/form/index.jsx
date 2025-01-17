import React, { useState } from "react";

function Form() {
  const [NameValue, setNameValue] = useState("");
  const [EmailValue, setEmailValue] = useState("");

  const [FormData, setFormData] = useState({
    Name: '',
    Email: '',
  });

  function handleInputChange(event) {
    //console.log(event);
    const { value } = event.target;

    setNameValue(value);
    //console.log(NameValue);
  }

  function handleEmailChange(event){
    const {value} = event.target;

    setEmailValue(value);
  }

  function handleOnChange(event){
    console.log(event.target.name,event.target.value);

    const {name, value} = event.target;

    setFormData({
      ...FormData,
      [name] : value
    })

    // In set form Data
    // [name] is from event.target.name = Name for Name section and Email for Email section
    // Name should match from the Form -> useState Declaration
    // pass the value to the paticular Name
    // ...FormData -> destructuring form data is important because the stored value will be erased


  }



  function handleSubmitRequest(event) {
    event.preventDefault();
    //const { name, value } = event.target;
    console.log(FormData.Name,FormData.Email,"Name Value & Email Value")
    //console.log(event.target.Name.value, event.target.Email.value );

    // setFormData({
    //   ...FormData,
    //   [name]: value,
    // });
  }

  console.log(FormData);

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmitRequest}>
        <input
          name="Name"
          id="Name"
          placeholder="Enter Your Name"
          //onChange={handleInputChange}   //M1-Handle on change individually
          //onChange={handleOnChange}      //M2- Handle Globally
          //M3 - Handle In-Line
          onChange={(event)=>{
            setFormData({
              ...FormData,
              [event.target.name] : event.target.value,
            })
          }}
          value={FormData.Name}
        />
        <input
          placeholder="Enter Your Email"
          id="Email"
          name="Email"
          //onChange={handleEmailChange}   //Handle on change individually
          onChange={handleOnChange}
          value={FormData.Email}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
