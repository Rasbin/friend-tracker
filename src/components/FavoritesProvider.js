import { useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const FavoritesProvider = ({ children }) => {
  const existingState = JSON.parse(sessionStorage.getItem('favoriteIds'));
  const [favoriteIds, setFavoriteIds] = useState(existingState || []);

  const toggleFavorite = personId => {
    let newFavoriteIds = favoriteIds.includes(personId)
      ? favoriteIds.filter(id => id !== personId)
      : favoriteIds.concat(personId)
    
    setFavoriteIds(newFavoriteIds);
    sessionStorage.setItem('favoriteIds', JSON.stringify(newFavoriteIds));
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      { children }
    </FavoritesContext.Provider>
  );

}

export { FavoritesProvider };