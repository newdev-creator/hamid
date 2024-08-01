"use client";

import React from "react";

interface PropsInput {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<PropsInput> = ({ label, type, name, placeholder }) => {
  return (
    <div className="w-1/2">
      <label className="block text-white">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 text-fontBlack border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default Input;
