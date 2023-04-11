import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
