import ThemeToggle from './ThemeToggle';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../general/Contexts/CartContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ toggleDrawer }) => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black flex justify-between items-center h-24 top-0 left-0 w-full relative">
      <div className="flex flex-row w-1/5 justify-evenly">
        <h1 className="w-full text-3xl font-bold text-[#ffffff] mr-7">
          <a href="/" className="hover:text-gray-300">
            PRINT.
          </a>
        </h1>
        <button
          className="lg:hidden flex items-center px-3 py-2 text-white hover:text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`lg:flex lg:space-x-12 ${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute lg:relative top-full left-0 bg-black lg:bg-transparent w-full lg:w-auto shadow-lg 
          lg:shadow-none p-4 lg:p-0 z-30`}
        >
          <li>
            <a
              className="inline-block py-2 text-base font-semibold whitespace-nowrap text-white hover:text-gray-600 lg:inline-flex"
              href="#"
            >
              Mobile App
            </a>
          </li>
          <li>
            <a
              className="inline-block py-2 text-base font-semibold whitespace-nowrap text-white hover:text-gray-600 lg:inline-flex"
              href="#"
            >
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="px-16 flex flex-row justify-between space-x-4">
        <div className="group relative justify-center">
          <button
            onClick={toggleDrawer}
            className="relative p-2 bg-transparent rounded-md"
          >
            <ShoppingBag
              size={20}
              className="text-text-dark"
              title="buy items"
            />
            <span
              className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 
          hidden group-hover:block bg-gray-700 text-white text-xs p-2  rounded-lg"
            >
              Transact
            </span>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};
