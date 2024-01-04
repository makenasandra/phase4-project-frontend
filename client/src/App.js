import React, { useState, useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ls from "local-storage";

import "./App.css";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import Example from "./components/Example";
import NavBar from "./components/NavBar";

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
          <Route exact path="/" element={<Example />}></Route>
          <Route path="*">
            <h1>404 not found</h1>
        </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
