import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Trainers from './pages/Trainers'
import Fees from './pages/Fees'
import Contact from './pages/Contact'
import Login from './pages/auth/Login'
import JoinNow from './pages/auth/JoinNow'
import Register from './pages/auth/Register'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/programs' element={<Programs/>}/>
          <Route path="/trainers" element={<Trainers/>}/>
          <Route path="/fees" element={<Fees/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/joinnow" element={<JoinNow/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App