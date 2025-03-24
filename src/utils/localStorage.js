// Function to save favorites to localStorage
export const saveFavorites = (favorites) => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  };
  
  // Function to get favorites from localStorage
  export const getFavorites = () => {
    try {
      const favorites = localStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error getting favorites from localStorage:', error);
      return [];
    }
  };
  
  // Function to add a product to favorites
  export const addToFavorites = (product) => {
    const favorites = getFavorites();
    const updatedFavorites = [...favorites, product];
    saveFavorites(updatedFavorites);
    return updatedFavorites;
  };
  
  // Function to remove a product from favorites
  export const removeFromFavorites = (productId) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    saveFavorites(updatedFavorites);
    return updatedFavorites;
  };
  
  // Function to check if a product is in favorites
  export const isInFavorites = (productId) => {
    const favorites = getFavorites();
    return favorites.some(item => item.id === productId);
  };