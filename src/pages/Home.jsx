import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  selectFilteredProducts, 
  selectProductsStatus, 
  selectProductsError 
} from '../redux/slices/productSlice';
import ProductGrid from '../components/product/ProductGrid';
import Lottie from 'react-lottie-player';
import product from '../assets/animations/product.json'

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center self-center">
      <h1 className="text-orange-500 text-lg lg:text-3xl font-normal mb-4 ">Ürünler</h1>
      <Lottie
          loop
          animationData={product}
          play
          style={{ width: 400, height: 200 }}
        />
      <div className="flex flex-col md:flex-row justify-center">
          <ProductGrid 
            products={products} 
            loading={status === 'loading'} 
            error={error} 
          />
      </div>
    </div>
  );
};

export default HomePage;