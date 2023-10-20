import { Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import './App.css'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}