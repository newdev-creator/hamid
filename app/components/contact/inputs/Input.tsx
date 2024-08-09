"use client";

import React from "react";

interface PropsInput {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<PropsInput> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-1/2">
      <label className="block text-white">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 text-fontBlack border border-gray-300 rounded-md"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
