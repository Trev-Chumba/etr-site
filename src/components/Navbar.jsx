import ThemeToggle from './ThemeToggle';

export const Navbar = () => (
  <nav className="bg-black flex justify-between items-center h-24 top-0 left-0 w-full fixed">
    <h1 className="w-full text-3xl font-bold text-[#ffffff]">
      <a href="/" className="hover:text-gray-300">
        PRINT.
      </a>
    </h1>
    <div className="px-16">
      <ThemeToggle />
    </div>
  </nav>
);
