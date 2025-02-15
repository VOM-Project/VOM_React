import "./App.css";
import LoginPage from "../src/pages/LoginPage";
import HomepyPage from "./pages/homepyPage.js";
// import Modal from './components/Modal.js';
// import Webpush from "./components/Webpush.js";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginCallback from "../src/components/LoginPage/LoginCallback";
import JoinPage from "./pages/JoinPage.js";
import WebCamPage from "./pages/WebCamPage.js";
import SearchPage from "./pages/SearchPage.js";

// Redirect `/homepy` to `/homepy/{memberId}`
function RedirectToHomepy() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const memberId = localStorage.getItem("memberId");

    if (memberId) {
      navigate(`/homepy/${memberId}`);
    } else {
      console.error("memberId not found in localStorage");
    }
  }, [navigate]);
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로를 /login으로 설정 */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/oauth2/code/google" element={<LoginCallback />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/homepy/:memberId" element={<HomepyPage />} />
        <Route path="/homepy" element={<RedirectToHomepy />} />
        {/* <Route path="/modal" element={<Modal />} /> */}
        {/* <Route path="/webpush" element={<Webpush />} /> */}
        <Route path="/webcam/:webcamId" element={<WebCamPage />} />
        <Route path="/search/:searchMemberId" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
