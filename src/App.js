import './App.css';
import Navbar from './Components/Navbar';
import Home from './Home.js';
import About from './Components/About';
import Projects from './Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = '/' element={<Home />} />
          <Route exact path = '/about' element={<About />} />
          <Route exact path = '/projects' element={<Projects />} /> 
          <Route exact path = '/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
