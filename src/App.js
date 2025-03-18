import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import
import Navbar from './components/Navbar';  // Import the Navbar component
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Books from './Books';
import Footer from './components/Footer';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<Books />} />
        </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
