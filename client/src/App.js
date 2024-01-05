import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ls from "local-storage";

import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/Home";
import ProgramsPage from "./components/ProgramsPage";
import PageNotFound from "./components/PageNotFound";

function App() {
  const [isMember, setMember] = useState("");

  const onLogIn = (user) => {
    setMember(user);
    ls.set("user", user);
  };

  return (
    
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/programs" element={<ProgramsPage />}></Route>
          <Route exact path="/tutors" element={<SignUp />}></Route>
          <Route exact path="/about" element={<SignUp />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
