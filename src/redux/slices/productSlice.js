import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/apiService.jsx';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  filteredItems: [],
  filters: {
    category: '',
    priceRange: {
      min: 0,
      max: Infinity,
    },
    searchQuery: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters[filterType] = value;
      
      // Apply filters
      state.filteredItems = state.items.filter(product => {
        const matchesCategory = !state.filters.category || 
          product.category === state.filters.category;
        
        const matchesPrice = product.price >= state.filters.priceRange.min && 
          product.price <= state.filters.priceRange.max;
        
        const matchesSearch = !state.filters.searchQuery || 
          product.title.toLowerCase().includes(state.filters.searchQuery.toLowerCase());
        
        return matchesCategory && matchesPrice && matchesSearch;
      });
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update state with fetched products
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setFilter, clearFilters } = productsSlice.actions;

export default productsSlice.reducer;

// Selectors
export const selectAllProducts = (state) => state.products.items;
export const selectFilteredProducts = (state) => state.products.filteredItems;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export const selectFilters = (state) => state.products.filters;