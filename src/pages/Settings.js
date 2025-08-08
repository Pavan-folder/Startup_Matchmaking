// src/pages/Settings.js

import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    // You can later connect this to an API or localStorage
    alert("Settings saved!");
  };

  return (
    <div className="settings-page p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <label className="text-lg">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="toggle-checkbox"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-lg">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="toggle-checkbox"
          />
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
