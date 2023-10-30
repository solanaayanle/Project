import { useState } from "react";
import InputUnit from "../assets/InputUnit";
import InputField from "../assets/InputField";
import UnitToggleButton from "../assets/UnitToggleButton";
import SelectField from "../assets/SelectField";

function UserRegistrationModal() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    dob: "",
    height: "",
    calories: "",
    lifestyle: "",
    weight: "",
    unit: "Metric",
  });
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log(formData);
    }
  };

  const handleUnitChange = (newUnit) => {
    setFormData({ ...formData, unit: newUnit });
  };

  const onSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setFormData({ ...formData, lifestyle: e.target.value });
  };

  const lifestyleOptions = [
    { value: "notActive", label: "Sedentary / Light Activity" },
    { value: "active", label: "Moderately Active" },
    { value: "veryActive", label: "Heavy Activity" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-100 bg-opacity-80">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="text"
                  placeholder="Email Address"
                />
                <InputField
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div>
                <UnitToggleButton
                  unit={formData.unit}
                  onUnitChange={handleUnitChange}
                />
              </div>
              <div className="space-y-4">
                <InputField
                  label="Date of Birth"
                  name="dob"
                  type="text"
                  placeholder="Date of Birth"
                />
                <div className="flex space-x-4">
                  <InputUnit
                    label="Height"
                    name="height"
                    type="number"
                    placeholder="0"
                    unit={formData.unit}
                    value={formData.height}
                    onChange={(e) =>
                      setFormData({ ...formData, height: e.target.value })
                    }
                  />
                </div>
                <div className="flex space-x-4">
                  <InputUnit
                    label="Weight"
                    name="weight"
                    type="number"
                    placeholder="0"
                    unit={formData.unit}
                    value={`${formData.weight}  
                    ${formData.unit}`}
                    onChange={(e) =>
                      setFormData({ ...formData, weight: e.target.value })
                    }
                  />
                </div>
              </div>
            </>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <InputField
                label="Daily Calories Goal"
                name="calories"
                type="number"
                placeholder="Daily Calories Goal"
                value={formData.calories}
                onChange={(e) =>
                  setFormData({ ...formData, lifestyle: e.target.value })
                }
              />
              <SelectField
                label={"Lifestyle"}
                options={lifestyleOptions}
                selectedValue={selectedValue}
                handleSelectChange={onSelectChange}
              />
            </div>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-2 px-6 rounded-lg ${
                step === 1 ? "hidden" : ""
              }`}
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-2 px-6 rounded-lg ${
                step === 3 ? "" : ""
              }`}
            >
              {step === 3 ? "Sign Up" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegistrationModal;
