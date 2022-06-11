import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { MentorsPage } from "./pages/MentorsPage";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <nav>
          <Link to="/mentors">Mentors</Link>
        </nav> */}
        <Header />
        <Routes>
          <Route path="/mentors" element={<MentorsPage />} />
        </Routes>
        <Footer />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
