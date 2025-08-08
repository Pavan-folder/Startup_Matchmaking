import React from "react";
import { useMatch } from "../context/MatchContext";

const Dashboard = () => {
  const { matches } = useMatch();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Matches</h2>
          <p className="text-2xl text-indigo-600">{matches.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Active Users</h2>
          <p className="text-2xl text-indigo-600">100</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Pending Deals</h2>
          <p className="text-2xl text-indigo-600">5</p>
        </div>
      </div>
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Recent Matches
        </h2>
        {matches.length > 0 ? (
          <ul className="list-disc list-inside">
            {matches.map((match, index) => (
              <li key={index} className="text-gray-600">
                {match.name || `Match ${index + 1}`}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No matches available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
