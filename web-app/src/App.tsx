import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MentorsPage } from "./pages/MentorsPage";
import LandingPage from "./pages/LandingPage";
import FindAMentor from "./components/FindAMentor";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/find-a-mentor" element={<FindAMentor />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
