import { BrowserRouter, Route } from 'react-router-dom';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { FavoritesProvider } from './components/FavoritesProvider';
import { NavBar } from './components/NavBar';
import  styles from './App.module.css';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <FavoritesProvider>
        <div className={styles.contentContainer}>
          <Route path='/' exact>
            <FriendsPage />
          </Route>
          <Route path='/friends/:friendId'>
            <FriendDetailPage />
          </Route>
          <Route path='/user-profile'>
            <UserProfilePage />
          </Route>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
  
}
