import React from "react";
import { useMatch } from "../context/MatchContext";

const MatchScreen = () => {
  const { matches, addMatch } = useMatch();

  const handleAddSampleMatch = () => {
    const newMatch = {
      name: `New Match ${matches.length + 1}`,
      date: new Date().toLocaleDateString(),
    };
    addMatch(newMatch);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Match Screen</h1>
      <button
        onClick={handleAddSampleMatch}
        className="mb-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Add Sample Match
      </button>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Available Matches
        </h2>
        {matches.length > 0 ? (
          <ul className="space-y-2">
            {matches.map((match, index) => (
              <li key={index} className="p-2 border-b border-gray-200">
                <span className="font-medium text-indigo-600">
                  {match.name || `Match ${index + 1}`}
                </span>
                {match.date && (
                  <span className="ml-2 text-gray-500 text-sm">
                    {match.date}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">
            No matches available. Add a sample match to start!
          </p>
        )}
      </div>
    </div>
  );
};

export default MatchScreen;
