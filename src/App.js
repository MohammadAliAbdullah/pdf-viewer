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
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  // Load the saved page number from local storage on component mount
  useEffect(() => {
    const savedPage = localStorage.getItem('pdfPage');
    if (savedPage) {
      setPageNumber(Number(savedPage));
    }
  }, []);

  // Save the current page number to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('pdfPage', pageNumber);
  }, [pageNumber]);

  // Handle successful document load
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    const savedPage = localStorage.getItem('pdfPage');
    if (savedPage && Number(savedPage) > numPages) {
      setPageNumber(numPages);
    }
  }

  // Navigate to the next page
  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  // Navigate to the previous page
  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Navigation Bar */}
      <BrowserRouter> {/* Changed Router to BrowserRouter */}
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      {/* PDF Viewer Controls */}
      <div className="my-2 flex items-center space-x-4">
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          &laquo;
        </button>

        <input
          type="number"
          min={1}
          max={numPages}
          value={pageNumber}
          onChange={(e) => {
            const pageNum = Number(e.target.value);
            if (pageNum >= 1 && pageNum <= numPages) {
              setPageNumber(pageNum);
            }
          }}
          className="w-16 text-center py-1 border border-gray-300 rounded-lg"
        />

        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="bg-blue-600 text-white py-1 px-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          &raquo;
        </button>
        <p className=" text-gray py-1 px-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed">
          Page {pageNumber} of {numPages || '...'}
        </p>

      </div>

      {/* PDF Viewer Container */}
      <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
        <Document
          file="/status_of_women_in_islam.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full max-w-4xl"
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
      </div>

      {/* Page Info */}
      <p className="mt-1 text-lg text-gray-600">
        Page {pageNumber} of {numPages || '...'}
      </p>
    </div>
  );
}

export default App;
