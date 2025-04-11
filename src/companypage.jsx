import React from "react";
import logo from "./assets/images/logo.jpg";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
        <img
          src={logo}
          alt="GHI Assets Logo"
          className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-blue-200"
        />
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          GHI Assets Limited
        </h1>
        
        {/* Cyan subtitle below the heading */}
        <p className="text-cyan-600 font-medium mb-4">
          The leading airline representatives and travel management specialist, providing
          services to reputable airlines and over 50% of travel and tour customers in Nigeria.
        </p>

        <p className="text-gray-600 mb-2">📍 45, Oduduwa Way, Ikeja, Lagos, Nigeria</p>
        <p className="text-gray-600 mb-2">📞 +2348012345678</p>
        <p className="text-gray-600 mb-2">📧 info@ghiassets.com</p>
        <a
          href="https://www.ghiassets.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block mb-4"
        >
          🌐 www.ghiassets.com
        </a>
        
        {/* Updated Google Maps link */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=45+Oduduwa+Way,+Ikeja,+Lagos,+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          📍 Get Directions
        </a>
      </div>
    </div>
  );
};

export default App;
