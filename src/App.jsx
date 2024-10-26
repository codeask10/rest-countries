import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { ThemeProvider } from "./contexts/ThemeContex";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:name" element={<DetailsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
