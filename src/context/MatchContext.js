// src/context/MatchContext.js

import React, { createContext, useState } from "react";

export const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState([]); // Array of matched buyers/sellers

  const addMatch = (match) => {
    setMatches((prev) => [...prev, match]);
  };

  return (
    <MatchContext.Provider value={{ matches, addMatch }}>
      {children}
    </MatchContext.Provider>
  );
};
