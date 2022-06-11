import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { MentorsPage } from "./pages/MentorsPage";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {});

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const login = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const logout = async () => {};
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <h1>Register</h1>
          <input
            placeholder="email@test.com"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            placeholder="*******"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Register</button>
        </div>
        <div>
          <h1>Login</h1>
          <input
            placeholder="email@test.com"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            placeholder="*******"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>login</button>
          {auth.currentUser?.email}
        </div>
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
