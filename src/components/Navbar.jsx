import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 py-2 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Pathagar</h1>
        
        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-300 cursor-pointer">
              Books
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hidden md:block"
          />
          
          {/* Icons */}
          <div className="text-white flex space-x-3">
            <button className="hover:text-gray-300">🔔</button> {/* Notifications */}
            <button className="hover:text-gray-300">⚙️</button> {/* Settings */}
            <button className="hover:text-gray-300">🚪</button> {/* Logout */}
          </div>
        </div>
      </div>
    </nav>
  );
}
