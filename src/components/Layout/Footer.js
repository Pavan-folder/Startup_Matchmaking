// src/components/Layout/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 p-4 mt-10">
      <p>© {new Date().getFullYear()} DealMatch. All rights reserved.</p>
      <p className="text-sm">Built for Caprae Capital Internship Assignment</p>
    </footer>
  );
};

export default Footer;
