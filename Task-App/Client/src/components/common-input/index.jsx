function CommonInput({label, type, onChange, name, id, placeholder, value}) {

    return (
        <div className="grid grid-cols-2 content-start p-2">
            <label className="font-semibold text-left text-sm">{label}</label>
            <input
                className="text-center border-1 rounded-md p-1 border-b-2 text-sm"
                name={name}
                type={type || "text"}
                id={id}
                placeholder={placeholder || "Enter Value Here"}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default CommonInput