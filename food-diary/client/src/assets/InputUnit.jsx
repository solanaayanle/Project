// components/InputField.js

const InputUnit = ({
  label,
  name,
  type,
  placeholder,
  unit,
  value,
  onChange,
}) => { 
  let unitMeasureWeight = (unit) => {
    if (unit === "Metric") {
      return "kg";
    } else {
      return "lbs";
    }
  };

  return (
    <div className="mb-4 flex items-center gap-4">
      <label className="block text-gray-700 text-lg font-medium">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-32 px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
      />
      <p className="px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400">
        {unitMeasureWeight(unit)}
      </p>
    </div>
  );
};

export default InputUnit;
