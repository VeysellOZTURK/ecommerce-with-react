import { CustomerResponse } from '../types/customer';

export const getCustomer = async (): Promise<CustomerResponse> => {
  try {
    const response = await api.get<CustomerResponse>('/Customer/Get');
    return response.data;
  } catch (error) {
    console.error('Error fetching customer:', error);
    throw error;
  }
}; 