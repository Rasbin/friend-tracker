import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { myProfileData, friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';
import styles from './FriendsPage.module.css';

const FriendsPage = () => {
  const history = useHistory();

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

    const goToPersonDetail = personId => {
      history.push(`/friends/${personId}`);
    }

    return (
      <>
        <WelcomeMessage name={myProfileData.name} />
        
        <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite' : 'favorites'}</p>
        <h2 className={styles.contentHeading}>Favorites</h2>
        <PeopleList people={favorites} onClickPerson={goToPersonDetail} />
        <h2 className={styles.contentHeading}>My Friends</h2>
        <PeopleList people={nonFavorites} onClickPerson={goToPersonDetail} />
      </>
    );

}

export { FriendsPage };