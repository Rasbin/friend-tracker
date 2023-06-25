import { useState } from 'react';
import { myProfileData, friendsData } from './data';
import { PeopleList } from './PeopleList';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import  styles from './App.module.css';

export const App = () => {
  const existingState = JSON.parse(sessionStorage.getItem('favoriteIds'));
  const [favoriteIds, setFavoriteIds] = useState(existingState || []);

  const favorites = favoriteIds.map(id =>
    friendsData.find(friend => friend.id === id));
  
  const nonFavorites = friendsData.filter(friend =>
    !favoriteIds.find(id => friend.id === id));

  const toggleFavorite = personId => {
    let newFavoriteIds = favoriteIds.includes(personId)
      ? favoriteIds.filter(id => id !== personId)
      : favoriteIds.concat(personId)
    
    setFavoriteIds(newFavoriteIds);
    sessionStorage.setItem('favoriteIds', JSON.stringify(newFavoriteIds));
    }

    return (
      <>
        <h1>Friend Tracker</h1>
        <div className={styles.contentContainer}>
          <WelcomeMessage name={myProfileData.name} />
          <h2 className={styles.contentHeading}>My Profile</h2>
          <ProfileInfo person={myProfileData} />
          <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite' : 'favorites'}</p>
          <h2 className={styles.contentHeading}>Favorites</h2>
          <PeopleList people={favorites} onClickPerson={toggleFavorite} />
          <h2 className={styles.contentHeading}>My Friends</h2>
          <PeopleList people={nonFavorites} onClickPerson={toggleFavorite} />
        </div>
      </>
    );

  }
