function CommonInput({ label, type, onChange, name, id, placeholder, value }) {
  return (
    <>
      <div className="p-2 grid grid-cols-2">
        <label className="p-2 font-bold text-lg">{label}</label>
        <input
          name={name}
          type={type || "text"}
          id={id}
          placeholder={placeholder || "Enter Value Here"}
          value={value}
          onChange={onChange}
          className="border border-black p-3 rounded"
        />
      </div>
    </>
  );
}

export default CommonInput;
