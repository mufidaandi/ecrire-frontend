// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserAuth from "./pages/UserAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Home from "./pages/Home";
import AddEntry from "./pages/AddEntry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="add-entry" element={<AddEntry />} />
        </Route>
        <Route path="/auth" element={<UserAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
