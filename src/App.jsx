// Import the React library, which allows us to define components
import './index.css';

import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { Players } from "./components/Players";
import Players from "./components/Players"
// Import the Players component, which we'll use to show a list of players


// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <>
      <div className='App'>
          <Routes>
            <Route index element={<Players/>}/>
            <Route path={"/players/:id"} element={<Players/>}/>
          </Routes>
      </div>
    </>
  );
}

// Export the App component as the default export

export default App;