import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const EditUser = () => {
  const { id } = useParams();

  const [addUser, setAddUser] = useState({
    name: "",
    userName: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddUser({ ...addUser, [name]: value });
  };

  useEffect(() => {
    const updateUser = async () => {
      try {
        const response = await axios.get(`${API_BASE}/user/${id}`);
        setAddUser(response.data);
      } catch (err) {
        console.log("Failed to fetch user:", err);
      }
    };
    updateUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE}/user/${id}`, addUser);
      alert("User updated successfully");
      setAddUser({
        name: "",
        userName: "",
        email: ""
      });
      navigate("/");
    } catch (err) {
      console.log("Failed to update user:", err);
      alert("Failed to update user");
    }
  };

  return (
    <div className="flex mt-5 justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-300 p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="font-semibold text-xl sm:text-2xl mb-6 text-center text-gray-700">
          Edit User
        </h1>

        <div className="space-y-4">
          <div className="text-left">
            <label className="block mb-1 font-medium text-gray-600">Name</label>
            <input
              onChange={handleChange}
              type="text"
              value={addUser.name}
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 font-medium text-gray-600">Username</label>
            <input
              onChange={handleChange}
              type="text"
              value={addUser.userName}
              name="userName"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 font-medium text-gray-600">Email</label>
            <input
              onChange={handleChange}
              type="email"
              value={addUser.email}
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded text-sm sm:text-base"
          >
            Update
          </button>
          <Link
            to="/"
            className="border border-gray-400 hover:bg-gray-100 text-gray-700 px-5 py-2 rounded text-sm sm:text-base text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
