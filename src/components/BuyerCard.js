// src/components/BuyerCard.js

import React from "react";

const BuyerCard = ({ buyer, onAccept, onReject }) => {
  return (
    <div className="buyer-card bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          {buyer.name || "Anonymous Buyer"}
        </h3>
        <span className="text-sm text-gray-500">
          {buyer.location || "Unknown Location"}
        </span>
      </div>

      <p className="mt-2 text-gray-700">
        <strong>Industry:</strong> {buyer.industry || "N/A"}
      </p>
      <p className="text-gray-700">
        <strong>Budget:</strong> {buyer.budget || "$0"}
      </p>
      <p className="text-gray-700">
        <strong>Intent:</strong> {buyer.intent || "General Inquiry"}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => onAccept(buyer)}
        >
          Accept
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          onClick={() => onReject(buyer)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default BuyerCard;
