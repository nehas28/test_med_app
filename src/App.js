import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login'; // Import the Login component

function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />

        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Define a Route for the Login page */}
          <Route path="/login" element={<Login />} />
          {/* Add other Routes for additional pages here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
