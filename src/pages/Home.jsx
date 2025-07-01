import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE}/user`);
        setUsers(response.data);
      } catch (err) {
        console.log("Failed to fetch users:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/user/${id}`);
      const response = await axios.get(`${API_BASE}/user`);
      setUsers(response.data);
    } catch (err) {
      console.log("Failed to delete user:", err);
    }
  };

  return (
    <div className="px-4 py-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-700">User List</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(users) && users.map((user, index) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3">
              {index + 1}. {user.name}
            </h3>
            <p className="text-sm sm:text-base mb-1">
              <span className="font-medium text-gray-700">Username:</span> {user.userName}
            </p>
            <p className="text-sm sm:text-base mb-3">
              <span className="font-medium text-gray-700">Email:</span> {user.email}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Link
                to={`user/${user.id}`}
                className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 text-sm sm:text-base"
              >
                View
              </Link>
              <Link
                to={`edit/${user.id}`}
                className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded hover:bg-blue-50 text-sm sm:text-base"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 text-sm sm:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
