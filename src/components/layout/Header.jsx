import '../../index.css'
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotalQuantity } from '../../redux/slices/cartSlice';
import ProductFilters from '../product/ProductFilters';

const Header = () => {
  const cartQuantity = useSelector(selectCartTotalQuantity);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header
      style={{
        background: "linear-gradient(90deg, rgba(249,183,103,1) 10%, rgba(252,230,108,1) 90%)"
      }}
      className="z-30 dark:bg-dark-card shadow-2xl rounded-b-2xl sticky top-0"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-primary leading-6 font-thin">
          Veysel OZTURK
        </Link>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggleTheme}
            className="p-2 rounded-full hover:bg-orange-200 dark:hover:bg-orange-400 transition-all duration-500 pointer-events-auto"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <Link to="/cart" className="p-2 relative z-30 hover:bg-orange-200 dark:hover:bg-orange-400 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartQuantity}
              </span>
            )}
          </Link>
          <Link to="/checkout" className="p-2 relative z-30 hover:bg-orange-200 dark:hover:bg-orange-400 rounded-full">
          <svg stroke="currentColor" className="w-5 h-5"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.671 60.671" xmlSpace="preserve"><g><g><ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097"/><path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9C48.354,35.818,42.661,30.079,35.64,30.079z"/></g></g></svg>
          </Link>
        <ProductFilters/>

        </div>
      </div>
    </header>
  );
};

export default Header;