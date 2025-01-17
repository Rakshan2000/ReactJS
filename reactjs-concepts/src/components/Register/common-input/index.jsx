function CommonInput({label, type, onChange, name, id, placeholder,value}){

    return(
        <div>
            <label>{label}</label>
            <input
                name={name}
                type={type || 'text'}
                id={id}
                placeholder={placeholder || "Enter value here"}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default CommonInput;