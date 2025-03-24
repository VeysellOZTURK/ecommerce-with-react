import { useState, useEffect } from 'react';
import { ProductResponse, ProductCategory } from '../types/product';

export const ProductList = () => {
  const [products, setProducts] = useState<ProductCategory[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: ProductResponse = await fetch('/api/products').then(res => res.json());
        if (response.success) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.productCategoryID}>
          <h2>{product.categoryName}</h2>
          <p>{product.categoryDetail.categoryDescription}</p>
          {/* Add more product details as needed */}
        </div>
      ))}
    </div>
  );
}; 