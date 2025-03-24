import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts, setFilter, clearFilters, selectFilters } from '../../redux/slices/productSlice';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';

const ProductFilters = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const filters = useSelector(selectFilters);
  const [isOpen, setIsOpen] = useState(false);

  // Derive categories from products
  const categories = useMemo(() => {
    if (!Array.isArray(products)) return [];
    return [...new Set(products.map(product => product.category))];
  }, [products]);

  // Get min and max prices from products
  const priceRange = useMemo(() => {
    if (!Array.isArray(products) || !products.length) return { min: 0, max: 1000 };
    const prices = products.map(product => product.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };
  }, [products]);

  const handleCategoryChange = (e) => {
    dispatch(setFilter({ filterType: 'category', value: e.target.value }));
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    dispatch(setFilter({
      filterType: 'priceRange',
      value: {
        ...filters.priceRange,
        [type]: value
      }
    }));
  };

  const handleSearchChange = (e) => {
    dispatch(setFilter({ filterType: 'searchQuery', value: e.target.value }));
  };

  const handleResetFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className=" relative flex items-start">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" block bg-orange-400 z-20 p-2 rounded-md text-white shadow-md hover:bg-orange-500 transition-colors"
      >
        <FiFilter size={24} />
      </button>
      
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -300, opacity: isOpen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="absolute bg-[#777777d1] backdrop-blur-2xl z-5 -left-52 lg:-left-35 top-15 h-screem border-[#F4A646] border-1 rounded-lg shadow-xl p-4 w-64"
      >
        <h2 className="text-lg font-semibold mb-4">Filtreler</h2>
        <div className="mb-4">
          <label htmlFor="search" className="block mb-2 font-medium">Arama</label>
          <input
            type="text"
            id="search"
            className="w-full border-[#F4A646] px-3 py-2 border rounded-md"
            placeholder="Ürün ara..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2 font-medium">Kategori</label>
          <select
            id="category"
            className="w-full border-[#F4A646] px-3 py-2 border rounded-md"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Fiyat Aralığı</label>
          <div className="flex space-x-4">
            <input
              type="number"
              className="w-full border-[#F4A646] border rounded-md p-1"
              min={priceRange.min}
              max={priceRange.max}
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange(e, 'min')}
            />
            <input
              type="number"
              className="w-full border-[#F4A646] border rounded-md p-1"
              min={priceRange.min}
              max={priceRange.max}
              value={filters.priceRange.max === Infinity ? priceRange.max : filters.priceRange.max}
              onChange={(e) => handlePriceChange(e, 'max')}
            />
          </div>
        </div>
        <button
          className="w-full py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
          onClick={handleResetFilters}
        >
          Filtreleri Sıfırla
        </button>
      </motion.div>
    </div>
  );
};

export default ProductFilters;