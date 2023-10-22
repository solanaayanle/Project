import { useState } from "react";

// eslint-disable-next-line react/prop-types
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Handle final registration submission
      // Send formData to the server or perform any necessary actions
      console.log(formData);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-lg font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your First Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Last Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your username"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your password"
                />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="dob"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your date of birth"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="height"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Height
                </label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your height"
                />
                <select
                  name="heightUnit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="metric">cm (Metric)</option>
                  <option value="imperial">ft (Imperial)</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="weight"
                  className="block text-gray-700 text-lg font-medium"
                >
                  Weight
                </label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Your weight"
                />
                <select
                  name="weightUnit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                >
                  <option value="metric">kg (Metric)</option>
                  <option value="imperial">lb (Imperial)</option>
                </select>
              </div>
            </>
          )}
          {step === 3 && (
            <div className="mb-4">
              <label
                htmlFor="calories"
                className="block text-gray-700 text-lg font-medium"
              >
                Daily Calories Goal
              </label>
              <input
                type="text"
                id="calories"
                name="calories"
                value={formData.calories}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Your daily calories goal"
              />
            </div>
          )}
          {step === 4 && (
            <div className="mb-4">
              <label
                htmlFor="lifestyle"
                className="block text-gray-700 text-lg font-medium"
              >
                Lifestyle
              </label>
              <input
                type="text"
                id="lifestyle"
                name="lifestyle"
                value={formData.lifestyle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Your lifestyle"
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
                step === 5 ? "" : ""
              }`}
            >
              {step === 5 ? "Sign Up" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegistrationModal;
