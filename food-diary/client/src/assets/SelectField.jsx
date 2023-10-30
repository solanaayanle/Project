import React from "react";

const SelectField = ({ label, options, selectedValue, handleSelectChange }) => {
  return (
    <>
      <label className="block text-gray-700 text-lg font-medium">{label}</label>
      <select
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;
