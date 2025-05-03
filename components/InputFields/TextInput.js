import React from "react";

const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  required,
  type,
  className,
}) => {
  return (
    <div>
      <label className="block text-black text-sm font-medium mb-2">
        {label}  {required && <span className="text-red-500">*</span>}
      </label>
     
      {type === "textarea" ? (
        <textarea
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextInput;
