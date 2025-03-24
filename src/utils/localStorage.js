export const saveFavorites = (favorites) => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  };
  
  export const getFavorites = () => {
    try {
      const favorites = localStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error getting favorites from localStorage:', error);
      return [];
    }
  };
  
  export const addToFavorites = (product) => {
    const favorites = getFavorites();
    const updatedFavorites = [...favorites, product];
    saveFavorites(updatedFavorites);
    return updatedFavorites;
  };
  
  export const removeFromFavorites = (productId) => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    saveFavorites(updatedFavorites);
    return updatedFavorites;
  };
  
  export const isInFavorites = (productId) => {
    const favorites = getFavorites();
    return favorites.some(item => item.id === productId);
  };