import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login'; // Import the Login component
import Sign_Up from './Components/Sign_Up/Sign_Up'; // Import the Sign Up component

function App() {
    return (
        <>
            {/* Set up BrowserRouter for routing */}
            <BrowserRouter>
                {/* Display the Navbar component */}
                <Navbar />

                {/* Set up the Routes for different pages */}
                <Routes>
                    {/* Define a Route for the Login page */}
                    <Route path="/login" element={<Login />} />
                    
                    {/* Define a Route for the Sign Up page */}
                    <Route path="/signup" element={<Sign_Up />} />

                    {/* Add other Routes for additional pages here */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
