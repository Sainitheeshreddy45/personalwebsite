import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
