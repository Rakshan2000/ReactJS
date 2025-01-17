import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
function commonForm({ formControls = [], FormData, setFormData, ButtonName, SubmitForm}) {
  function renderFormElement(getCurrentElement) {
    let content = null;

    switch (getCurrentElement.componentType) {
      case formTypes.INPUT:
        console.log(FormData);
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            type={getCurrentElement.type}
            value={FormData[getCurrentElement.name]}
            onChange={(event) => {
              setFormData({
                ...FormData,
                [event.target.name]: event.target.value,
              });
            }}
          />
        );

        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement}
            type={getCurrentElement.input}
            value={FormData[getCurrentElement.name]}
            onChange={(event) => {
              setFormData({
                ...FormData,
                [event.target.name]: event.target.value,
              });
            }}
          />
        );
        break;
    }

    return content;
  }
  return (

    <form onSubmit={SubmitForm}>
      {
      formControls.length
        ? formControls.map(
            (singleFormElementItem) => renderFormElement(singleFormElementItem)
          )
        : null}
        <button type="submit" style={{marginTop : '15px'}}>{ButtonName || 'Submit'}</button>
    </form>
  );
}

export default commonForm;
