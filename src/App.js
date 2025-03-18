import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './App.css'; // Ensure to import your CSS file
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import
import Navbar from './components/Navbar';  // Import the Navbar component
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Books from './Books';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  return (
      <BrowserRouter> {/* Changed Router to BrowserRouter */}
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
