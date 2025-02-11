import ThemeToggle from './ThemeToggle';
import { ShoppingBag } from 'lucide-react';

export const Navbar = ({ toggleDrawer }) => (
  <nav className="bg-black flex justify-between items-center h-24 top-0 left-0 w-full fixed">
    <h1 className="w-full text-3xl font-bold text-[#ffffff]">
      <a href="/" className="hover:text-gray-300">
        PRINT.
      </a>
    </h1>
    <div className="px-16 flex flex-row justify-between space-x-4">
      <div className="group relative justify-center">
        <button
          onClick={toggleDrawer}
          className="relative p-2 bg-transparent rounded-md"
        >
          <ShoppingBag size={20} className="text-text-dark" title="buy items" />
          <span
            className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 
          hidden group-hover:block bg-gray-700 text-white text-xs p-2  rounded-lg"
          >
            Transact
          </span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
      <ThemeToggle />
    </div>
  </nav>
);
