// src/components/AIAnalyzer.js

import React, { useState } from "react";

const AIAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setLoading(true);
    setSummary("");

    // Simulate AI analysis delay
    setTimeout(() => {
      setLoading(false);
      setSummary(
        `📊 AI Summary of "${uploadedFile.name}":\n\n• Revenue: Consistent YoY growth (~15%)\n• Profit Margin: Healthy at ~23%\n• Liabilities: Minimal debt exposure\n• Risk Areas: Fluctuating customer retention (last 2 quarters)`
      );
    }, 2000);
  };

  return (
    <div className="ai-analyzer bg-white p-6 shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">📎 Upload Financial Document</h2>

      <input
        type="file"
        accept=".pdf,.docx,.xlsx"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {loading && <p className="text-blue-600">Analyzing with AI...</p>}

      {summary && (
        <div className="mt-4 bg-gray-100 p-4 rounded border text-gray-800 whitespace-pre-wrap">
          {summary}
        </div>
      )}
    </div>
  );
};

export default AIAnalyzer;
