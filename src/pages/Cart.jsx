import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectCartItems, 
  selectCartTotalAmount, 
  addToCart, 
  removeFromCart 
} from '../redux/slices/cartSlice';
import Lottie from 'react-lottie-player';
import nothing from '../assets/animations/nothing.json'
const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Sepetiniz</h1>
        <p className="mb-6">Sepetinizde ürün bulunmamaktadır, hadi biraz alışveriş yapalım!</p>
        <Link to="/" className="bg-amber-400 py-2 px-6 rounded-2xl shadow-2xl hover:bg-amber-600 duration-500">
          Alışverişe Devam Et
        </Link>
        <Lottie
          loop
          animationData={nothing}
          play
          style={{ width: 500, height: 300 }}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Sepetiniz</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ürün</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Fiyat</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Adet</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Toplam</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="p-1 rounded-full bg-amber-400 py-2 px-6 shadow-2xl hover:bg-amber-600 duration-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => handleIncreaseQuantity(item)}
                          className="p-1 rounded-full bg-amber-400 py-2 px-6 shadow-2xl hover:bg-amber-600 duration-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>
            
            <div className="flex justify-between py-2 border-b dark:border-gray-700">
              <span>Ara Toplam</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b dark:border-gray-700">
              <span>Kargo</span>
              <span>Ücretsiz</span>
            </div>
            
            <div className="flex justify-between py-2 text-lg font-semibold">
              <span>Toplam</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            
            <Link 
              to="/checkout" 
              className="mt-6 w-full block text-center btn-primary py-3"
            >
              Ödemeye Geç
            </Link>
            
            <Link 
              to="/" 
              className="mt-4 w-full block text-center py-3 border bg-amber-400  shadow-2xl hover:bg-amber-600 duration-500 rounded-md transition-colors"
            >
              Alışverişe Devam Et
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;