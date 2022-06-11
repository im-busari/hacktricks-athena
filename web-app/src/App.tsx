import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { MentorsPage } from "./pages/MentorsPage";
import { MentorDetailPage } from "./pages/MentorDetailPage";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/mentors/:id" element={<MentorDetailPage />} />
        </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;
