import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { isInFavorites, addToFavorites, removeFromFavorites } from '../../utils/localStorage';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(isInFavorites(product.categoryTypeID));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.categoryTypeID);
    } else {
      addToFavorites(product);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative group p-2 shadow-2xl overflow-hidden rounded-lg">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-100 rounded-lg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent)`,
        }}
      />
      
      <div className="relative pt-[100%] overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-lg">
        <a href={product.categorySlug} target="_blank">
          <img 
            src={product.categoryDetail.categoryMainImage || 'https://via.placeholder.com/150'} 
            alt={product.seo.meta_title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </a>
        
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{product.categoryName}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-md text-md">{product.releaseDate}</span>
          <button 
            onClick={handleAddToCart}
            className=" z-8 cursor-pointer duration-500 transition-all hover:bg-amber-600 rounded-full flex text-center justify-center items-center p-2"
          >
            <svg height={30} width={30} fill='#F4A646' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g id="shopping_cart" data-name="shopping cart">
                <path d="M29.74 8.32A1 1 0 0 0 29 8H13a1 1 0 0 0 0 2h14.91l-.81 9.48a1.87 1.87 0 0 1-2 1.52H12.88a1.87 1.87 0 0 1-2-1.52L10 8.92v-.16L9.33 6.2A3.89 3.89 0 0 0 7 3.52L3.37 2.07a1 1 0 0 0-.74 1.86l3.62 1.45a1.89 1.89 0 0 1 1.14 1.3L8 9.16l.9 10.49a3.87 3.87 0 0 0 4 3.35h.1v2.18a3 3 0 1 0 2 0V23h8v2.18a3 3 0 1 0 2 0V23h.12a3.87 3.87 0 0 0 4-3.35L30 9.08a1 1 0 0 0-.26-.76zM14 29a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
                <path d="M15 18v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0zM20 18v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0zM25 18v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0z"/>
              </g>
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: {product.categoryTypeID}</p>
      </div>
    </div>  
  );
};

export default React.memo(ProductCard);
