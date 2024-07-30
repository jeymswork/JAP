import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <div className='box-border overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
