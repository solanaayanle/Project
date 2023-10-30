import React, { useState } from "react";

const UnitToggleButton = ({ unit, onUnitChange }) => {
  const toggleUnit = () => {
    onUnitChange(unit === "Metric" ? "Imperial" : "Metric");
  };

  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-2 px-6 rounded-lg"
        onClick={toggleUnit}
      >
        Toggle Unit from {unit}
      </button>
    </div>
  );
};

export default UnitToggleButton;
