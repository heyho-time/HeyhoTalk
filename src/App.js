import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ChatPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
