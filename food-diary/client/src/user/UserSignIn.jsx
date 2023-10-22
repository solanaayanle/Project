import { useState } from 'react';

export default function UserSignIn() {
    const [formData, setFormData] = useState({
      username: "",
      password: ""
    });

    const handleSubmit = async (e) => {
      e.preventDefault(); 

      try {
        const response = await fetch('http://localhost:8080/auth/loginUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log(response)
        if (!response.ok) { 
        console.error('Authentication failed');
        } else { 
          console.log("okay")
        }
      } catch (error) { 
        console.error('Authentication failed:', error);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  return(<form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
  <div className="mb-4">
    <label htmlFor="username" className="block text-gray-700 text-lg font-medium">
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
    <label htmlFor="password" className="block text-gray-700 text-lg font-medium">
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
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg">
    Sign In
  </button>
</form>

  )
}