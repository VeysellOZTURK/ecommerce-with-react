import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import Lottie from 'react-lottie-player'
import magnifyingAnimate from '../../assets/animations/magnifying.json'
import errorAnimate from '../../assets/animations/error.json'
import { getProducts } from '../../api/apiService';
import { div } from 'framer-motion/client';

const ProductGrid = ({  loading }) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        console.log(data)

      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message || 'Ürünler yüklenirken bir hata oluştu');
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1,2,3,4,5,6,7,8].map((skelekton) => (
          <div key={skelekton} role="status" className="flex flex-col space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center bg-gray-300 rounded-sm lg:w-[340px] lg:h-[340px] md:w-[240px] md:h-[240px] h-[542px] mb-4 dark:bg-gray-500">
              <svg fill="#b7b7b7" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 512.002 512.002" xmlSpace="preserve"> <g> <g> <path d="M486.389,153.614H371.202L292.894,6.795c-3.328-6.246-11.059-8.627-17.322-5.273c-6.238,3.328-8.601,11.076-5.273,17.322 l71.874,134.771h-172.35l71.874-134.771c3.328-6.246,0.964-14.003-5.273-17.322c-6.289-3.354-13.986-0.973-17.322,5.273 l-78.308,146.82H25.605c-14.139,0-25.599,11.46-25.599,25.599v51.198c0,14.139,11.46,25.599,25.599,25.599h0.444 c0,0.956-0.393,1.869-0.282,2.824l25.599,230.392c1.442,12.962,12.399,22.775,25.446,22.775H435.2 c13.047,0,24.003-9.813,25.445-22.775l25.599-230.392c0.111-0.964-0.282-1.869-0.282-2.824h0.435c14.139,0,25.599-11.46,25.599-25.599v-51.198C511.988,165.083,500.529,153.614,486.389,153.614z M435.191,486.403H76.803L51.204,256.011H460.79L435.191,486.403z M486.389,230.412L486.389,230.412H25.605v-51.198h101.535l-10.444,19.575c-3.328,6.246-0.964,14.003,5.273,17.322c1.928,1.024,3.985,1.502,6.016,1.502c4.574,0,9.002-2.449,11.315-6.775l16.87-31.623h199.656l16.87,31.623c2.312,4.326,6.741,6.775,11.315,6.775c2.022,0,4.087-0.478,6.016-1.502c6.238-3.328,8.601-11.076,5.273-17.322l-10.444-19.575h101.535V230.412z"/></g></g><g><g><path d="M140.801,281.61c-21.17,0-38.399,17.228-38.399,38.399v102.397c0,21.179,17.228,38.399,38.399,38.399s38.399-17.228,38.399-38.399V320.009C179.2,298.838,161.971,281.61,140.801,281.61z M153.6,422.405c0,7.065-5.734,12.8-12.8,12.8s-12.8-5.734-12.8-12.8V320.009c0-7.065,5.734-12.8,12.8-12.8s12.8,5.734,12.8,12.8V422.405z"/></g></g><g><g><path d="M255.997,281.61c-21.17,0-38.399,17.228-38.399,38.399v102.397c0,21.179,17.228,38.399,38.399,38.399s38.399-17.228,38.399-38.399V320.009C294.396,298.838,277.167,281.61,255.997,281.61z M268.797,422.405c0,7.065-5.734,12.8-12.8,12.8c-7.065,0-12.8-5.734-12.8-12.8V320.009c0-7.065,5.734-12.8,12.8-12.8c7.065,0,12.8,5.734,12.8,12.8V422.405z"/></g></g><g><g><path d="M371.193,281.61c-21.17,0-38.399,17.228-38.399,38.399v102.397c0,21.179,17.228,38.399,38.399,38.399s38.399-17.228,38.399-38.399V320.009C409.592,298.838,392.364,281.61,371.193,281.61z M383.993,422.405c0,7.065-5.734,12.8-12.8,12.8s-12.8-5.734-12.8-12.8V320.009c0-7.065,5.734-12.8,12.8-12.8s12.8,5.734,12.8,12.8V422.405z"/></g></g></svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center text-center py-12">
        <Lottie
          loop
          animationData={errorAnimate}
          play
          style={{ width: 200, height: 100 }}
        />
        <p className='text-red-300 lg:text-2xl md:text-xl sm:text-lg '>{error}</p>
        <p className="text-red-200 mb-4">Ürünler yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="flex flex-col text-center justify-center items-center ">
        <Lottie
          loop
          animationData={magnifyingAnimate}
          play
          style={{ width: 400, height: 200 }}
        />
        <p>Üzgünüz, aradığın ürünü bulunamadık...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;