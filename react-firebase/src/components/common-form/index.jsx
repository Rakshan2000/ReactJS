import CommonInput from "../common-input";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function commonForm({
  formControls = [],
  FormData,
  setFormData,
  ButtonName,
  SubmitForm,
}) {
  function renderFormElement(getSingleFormElement) {
    let content = null;

    switch (getSingleFormElement.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            key={getSingleFormElement.id}
            label={getSingleFormElement.label}
            name={getSingleFormElement.name}
            id={getSingleFormElement.id}
            placeholder={getSingleFormElement.placeholder}
            type={getSingleFormElement.type}
            value={FormData[getSingleFormElement.name]}
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
            label={getSingleFormElement.label}
            name={getSingleFormElement.name}
            id={getSingleFormElement.id}
            placeholder={getSingleFormElement.placeholder}
            type={getSingleFormElement.type}
            value={FormData[getSingleFormElement.name]}
            onChange={(event) => {
              setFormData({
                ...FormData,
                [event.target.name]: event.target.value,
              });
            }}
          />
        );
    }

    return content;
  }
  return (
    <form onSubmit={SubmitForm} className="p-10">
      {formControls.length
        ? formControls.map((singleFormElement) =>
            renderFormElement(singleFormElement)
          )
        : null}
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full text-center mt-5 flex justify-center"
        >
          {ButtonName || "Submit"}
        </button>
      </div>
    </form>
  );
}

export default commonForm;
