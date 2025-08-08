import React, { useState } from "react";

const DealFlow = () => {
  const [deals] = useState([
    { id: 1, title: "Startup A Funding", amount: 50000, status: "Pending" },
    {
      id: 2,
      title: "Startup B Acquisition",
      amount: 200000,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Startup C Partnership",
      amount: 75000,
      status: "Completed",
    },
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Deal Flow</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Ongoing Deals
        </h2>
        {deals.length > 0 ? (
          <ul className="space-y-4">
            {deals.map((deal) => (
              <li
                key={deal.id}
                className="p-4 border border-gray-200 rounded-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-indigo-600">
                      {deal.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Amount: ${deal.amount.toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      deal.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : deal.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {deal.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No deals available.</p>
        )}
      </div>
    </div>
  );
};

export default DealFlow;
