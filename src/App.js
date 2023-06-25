import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NavBar } from './components/NavBar';

import  styles from './App.module.css';

export const App = () => {
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
    <BrowserRouter>
      <NavBar />
      <div className={styles.contentContainer}>
        <Route path='/' exact>
          <FriendsPage
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite} />
        </Route>
        <Route path='/friends/:friendId'>
          <FriendDetailPage
            favoriteIds={favoriteIds}
            onToggleFavorite={toggleFavorite} />
        </Route>
        <Route path='/user-profile'>
          <UserProfilePage />
        </Route>
      </div>
    </BrowserRouter>
  );
  
}
