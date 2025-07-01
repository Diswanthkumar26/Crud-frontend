import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
  const [viewUser, setViewUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    const userById = async () => {
      let response = await axios.get(`http://localhost:8080/user/${id}`);
      setViewUser(response.data);
    };
    userById();
  }, [id]);

  return (
    <div className="w-full flex flex-col items-center px-4 py-6 bg-gray-50">
      {viewUser && (
        <div className="w-full max-w-2xl border border-gray-300 py-7 shadow-2xl rounded-xl px-4 bg-white">
          <h1 className="text-2xl font-semibold text-center mb-4 text-gray-700">
            User Details
          </h1>
          <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
            <h3 className="text-center mb-4 text-gray-600 text-base sm:text-lg break-words">
              Details of user <span className="font-semibold">{viewUser.userName}</span>
            </h3>

            <div className="bg-white flex flex-col sm:flex-row sm:justify-center sm:gap-2 border-b border-b-gray-300 mx-auto py-2 px-2 break-words">
              <h5 className="font-semibold text-gray-700">Name:</h5>
              <p className="text-gray-800">{viewUser.name}</p>
            </div>

            <div className="bg-white flex flex-col sm:flex-row sm:justify-center sm:gap-2 border-b border-b-gray-300 mx-auto py-2 px-2 break-words">
              <h5 className="font-semibold text-gray-700">Username:</h5>
              <p className="text-gray-800">{viewUser.userName}</p>
            </div>

            <div className="bg-white flex flex-col sm:flex-row sm:justify-center sm:gap-2 mx-auto py-2 px-2 break-words">
              <h5 className="font-semibold text-gray-700">Email:</h5>
              <p className="text-gray-800 ">{viewUser.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewUser;
