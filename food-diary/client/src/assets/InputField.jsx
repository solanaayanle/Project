// components/InputField.js

const InputUnit = ({ label, name, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-lg font-medium">
        {label}
      </label>
      <input
        type={type} 
        name={name}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputUnit;
