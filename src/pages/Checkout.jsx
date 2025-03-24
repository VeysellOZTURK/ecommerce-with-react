import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { selectCartItems, selectCartTotalAmount } from '../redux/slices/cartSlice';
import nothing from '../assets/animations/nothing.json'
import Lottie from 'react-lottie-player';

const schema = yup.object().shape({
  firstName: yup.string().required('Ad alanı zorunludur'),
  lastName: yup.string().required('Soyad alanı zorunludur'),
  email: yup.string().email('Geçerli bir e-posta adresi giriniz').required('E-posta alanı zorunludur'),
  phone: yup.string().required('Telefon alanı zorunludur'),
  address: yup.string().required('Adres alanı zorunludur'),
  city: yup.string().required('Şehir alanı zorunludur'),
  zipCode: yup.string().required('Posta kodu alanı zorunludur'),
  cardNumber: yup.string()
    .required('Kart numarası zorunludur')
    .matches(/^\d{16}$/, 'Kart numarası 16 haneli olmalıdır'),
  cardName: yup.string().required('Kart üzerindeki isim zorunludur'),
  expiryDate: yup.string()
    .required('Son kullanma tarihi zorunludur')
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Geçerli bir son kullanma tarihi giriniz (AA/YY)'),
  cvv: yup.string()
    .required('CVV zorunludur')
    .matches(/^\d{3,4}$/, 'CVV 3 veya 4 haneli olmalıdır'),
});

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = (data) => {
    console.log('Order submitted:', data);
    alert('Sipariş başarıyla alındı!');
  };
  const [cardDetails, setCardDetails] = useState({
    name: "YOUR NAME",
    number: "#### #### #### ####",
    expiry: "MM/YY",
    cvv: "***",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value.toUpperCase() }));
  };
  
  if (!cartItems.length === 0) {
    return (
      <div className="text-center py-12 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Ödeme</h1>
        <p className="mb-6">Sepetinizde ürün bulunmamaktadır, hadi biraz alışveriş yapalım!</p>
        <a href="/" className="bg-amber-400 py-2 px-6 rounded-2xl shadow-2xl hover:bg-amber-600 duration-500">
          Alışverişe Devam Et
        </a>
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
    <div className="container mx-auto px-4 text-black">
      <h1 className="text-3xl font-bold mb-8">Ödeme</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Teslimat Bilgileri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 font-medium">Ad</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 font-medium">Soyad</label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">Telefon</label>
                  <input
                    type="text"
                    id="phone"
                    {...register('phone')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block mb-1 font-medium">Adres</label>
                  <input
                    type="text"
                    id="address"
                    {...register('address')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.address ? 'border-red-500' : ''}`}
                  />
                  {errors.address && <p className="mt-1 text-red-500 text-sm">{errors.address.message}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block mb-1 font-medium">Şehir</label>
                  <input
                    type="text"
                    id="city"
                    {...register('city')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.city ? 'border-red-500' : ''}`}
                  />
                  {errors.city && <p className="mt-1 text-red-500 text-sm">{errors.city.message}</p>}
                </div>
                <div>
                  <label htmlFor="zipCode" className="block mb-1 font-medium">Posta Kodu</label>
                  <input
                    type="text"
                    id="zipCode"
                    {...register('zipCode')}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.zipCode ? 'border-red-500' : ''}`}
                  />
                  {errors.zipCode && <p className="mt-1 text-red-500 text-sm">{errors.zipCode.message}</p>}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Ödeme Bilgileri</h2>
              <div className="relative mb-4 lg:w-96 lg:h-56 h-46 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-4 text-white">
                    <div className="absolute top-4 left-6 lg:text-lg text-sm font-semibold tracking-widest">
                      {cardDetails.cardNumber || "#### #### #### ####"}
                    </div>
                    <div className="absolute bottom-4 left-6 text-sm uppercase">
                      {cardDetails.cardName || "AD SOYAD"}
                    </div>
                    <div className="absolute bottom-4 right-6 text-sm">
                      {cardDetails.expiryDate || "MM/YY"}
                    </div>
                </div>
              <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <label htmlFor="cardNumber" className="block mb-1 font-medium">Kart Numarası</label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    {...register('cardNumber')}
                    onChange={handleChange}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.cardNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.cardNumber && <p className="mt-1 text-red-500 text-sm">{errors.cardNumber.message}</p>}
                </div>
                <div>
                  <label htmlFor="cardName" className="block mb-1 font-medium">Kart Üzerindeki İsim</label>
                  <input
                    type="text"
                    id="cardName"
                    {...register('cardName')}
                    onChange={handleChange}
                    className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.cardName ? 'border-red-500' : ''}`}
                  />
                  {errors.cardName && <p className="mt-1 text-red-500 text-sm">{errors.cardName.message}</p>}
                </div>
                  <div>
                    <label htmlFor="expiryDate" className="block mb-1 font-medium">Son Kullanma Tarihi</label>
                    <input
                      type="text"
                      id="expiryDate"
                      placeholder="AA/YY"
                      onChange={handleChange}
                      {...register('expiryDate')}
                      className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.expiryDate ? 'border-red-500' : ''}`}
                    />
                    {errors.expiryDate && <p className="mt-1 text-red-500 text-sm">{errors.expiryDate.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block mb-1 font-medium">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="XXX"
                      onChange={handleChange}
                      {...register('cvv')}
                      className={`border-amber-400 border-2 px-6 py-2 rounded-lg ${errors.cvv ? 'border-red-500' : ''}`}
                    />
                    {errors.cvv && <p className="mt-1 text-red-500 text-sm">{errors.cvv.message}</p>}
                  </div>
                  
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-amber-400 py-2 px-6 rounded-2xl shadow-2xl hover:bg-amber-600 duration-500 text-lg"
            >
              Siparişi Tamamla
            </button>
          </form>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-dark-card rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>
            <div className="divide-y dark:divide-gray-700">
              {cartItems.map((item) => (
                <div key={item.id} className="py-3 flex">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;