# Hyper Teknoloji Frontend Case 

This is a responsive e-commerce front-end application built with React and Redux Toolkit, featuring product listing, cart functionality, favorites, and a checkout process with form validation.

## Features

### Required Features (Part 1)
- ✅ Product listing from real API
- ✅ Product cards with image, title, price, and "Add to Cart" button
- ✅ Cart item count indicator in the header
- ✅ Fully responsive design for all screen sizes
- ✅ State management with Redux Toolkit
- ✅ Styled with Tailwind CSS

### Advanced Features (Part 2)
- ✅ Category/price/keyword filtering
- ✅ Add to favorites (using localStorage)
- ✅ Dark/light theme toggle
- ✅ Performance optimization with React.memo and lazy loading
- ✅ Form validation with React Hook Form + Yup

## Installation

1. Clone the repository:
```bash
git clone https://github.com/VeysellOZTURK/ecommerce-with-react.git
cd ecommerce-with-react
```

2. Install dependencies:
```bash
npm install
```

3. Edit your API_KEY to .env file:
```bash
VITE_API_URL= Your Api Url
VITE_API_KEY= Your Api Key
VITE_API_TOKEN= Your Api Token
```

4. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` (May vary depending on port space.)

## Project Structure

```
src/
├── api/             # API service and configuration
├── components/      # Reusable UI components
│   ├── layout/      # Layout components (Header, Footer)
│   └── ...          # Other components
├── pages/           # Page components
├── redux/           # Redux store, slices and selectors
│   └── slices/      # Redux Toolkit slices
├── utils/           # Utility functions
└── ...              # Other files
```

## Technologies Used

- **React** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Yup** - Form validation
- **Axios** - API communication

## API Integration

This project uses the real Hyper Teknoloji API with token authentication:

- API Endpoint: `https://api.hyperteknoloji.com.tr/Customer/Get`
- Authentication: Bearer token

## Performance Optimizations

- React.memo to prevent unnecessary re-renders
- Lazy loading for product images
- Efficient state management with Redux Toolkit
- Responsive design with Tailwind CSS

## Additional Features

### Dark Mode
The application supports dark and light themes, which are saved to localStorage for persistence between sessions.

### Favorites
Users can add products to favorites, which are stored in localStorage.

### Form Validation
The checkout form implements comprehensive validation with React Hook Form and Yup.

## Future Improvements

- Add unit tests with Jest and React Testing Library
- Implement more advanced filtering options
- Add product details page
- Improve API error handling
- Add user authentication and profile management

## License

This project was created as a case for Hyper Teknoloji.
