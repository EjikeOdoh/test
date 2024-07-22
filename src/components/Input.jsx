import React from "react";

const Input = ({ label, placeholder, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <p className="font-medium text-sm text-[#09090B] mb-1">
        {label} <span className="text-[#DC2626]">*</span>
      </p>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required
        className="border border-[#E4E4E7] rounded-md w-full h-[50px] px-3 py-2.5"
      />
    </div>
  );
};

export default Input;
