import CommonInput from "../common-input";

const formTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea"
};

function CommonForm({formControls = [], FormData, setFormData, ButtonName, SubmitForm}) {
    function renderFormElement(getSingleFormElement) {
        let content = null;

        switch(getSingleFormElement.componentType) {
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
                                [event.target.name]: event.target.value
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
                                [event.target.name]: event.target.value
                            });
                        }}
                    />
                );
        }

        return content;
    }

    return (
        <form onSubmit={SubmitForm}>
            {formControls.map((formElement) => renderFormElement(formElement))}
            <div className="text-left p-5">
                <button type="submit" className="w-full">{ButtonName}</button>
            </div>
        </form>
    );
}

export default CommonForm;