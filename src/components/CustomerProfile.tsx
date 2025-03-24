import { useEffect, useState } from 'react';
import { CustomerData } from '../types/customer';
import { getCustomer } from '../api/apiService';

export const CustomerProfile = () => {
  const [customer, setCustomer] = useState<CustomerData | null>(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomer();
        if (response.success) {
          setCustomer(response.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCustomer();
  }, []);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h1>{customer.firstName} {customer.lastName}</h1>
      <p>Email: {customer.email}</p>
      <p>Balance: {customer.balance}</p>
      {/* Add more fields as needed */}
    </div>
  );
}; 