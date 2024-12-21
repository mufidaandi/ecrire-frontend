// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserAuth from './pages/UserAuth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './pages/Main'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/auth" element={<UserAuth />} /> 
      </Routes>
    </Router>
  )
}

export default App
