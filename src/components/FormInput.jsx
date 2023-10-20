import React from "react";

const FormInput = ({ label, name, type, defaultValue  , size}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className={`input input-bordered w-full max-w-xs ${size}`}
      />
    </div>
  );
};

export default FormInput;
