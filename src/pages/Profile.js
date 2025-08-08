// src/pages/Profile.js

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-page p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        <p>
          <strong>Name:</strong> {user?.name || "John Doe"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email || "example@email.com"}
        </p>
        <p>
          <strong>Role:</strong> {user?.role || "Buyer / Seller"}
        </p>
        <p>
          <strong>Company:</strong> {user?.company || "N/A"}
        </p>
        <p>
          <strong>Location:</strong> {user?.location || "Not specified"}
        </p>
        <p>
          <strong>Budget:</strong> {user?.budget || "$100,000"}
        </p>
        <p>
          <strong>Bio:</strong>{" "}
          {user?.bio || "Tell us more about your goals..."}
        </p>
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
