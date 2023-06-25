import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { myProfileData, friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';
import styles from './FriendsPage.module.css';

const FriendsPage = ({ favoriteIds, onToggleFavorite}) => {
  const history = useHistory();

  const favorites = favoriteIds.map(id =>
    friendsData.find(friend => friend.id === id));
  
  const nonFavorites = friendsData.filter(friend =>
    !favoriteIds.find(id => friend.id === id));
  
    const goToPersonDetail = personId => {
      history.push(`/friends/${personId}`);
    }

    return (
      <>
        <WelcomeMessage name={myProfileData.name} />
        
        <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite' : 'favorites'}</p>
        <h2 className={styles.contentHeading}>Favorites</h2>
        <PeopleList
          people={favorites}
          onClickPerson={goToPersonDetail}
          personActionName="Remove from Favorites"
          onPersonAction={onToggleFavorite} />
        <h2 className={styles.contentHeading}>My Friends</h2>
        <PeopleList
          people={nonFavorites}
          onClickPerson={goToPersonDetail}
          personActionName="Add to Favorites"
          onPersonAction={onToggleFavorite} />
      </>
    );
}

FriendsPage.propTypes = {
  favoriteIds: PropTypes.arrayOf(PropTypes.string),
  onToggleFavorite: PropTypes.func.isRequired,
}

export { FriendsPage };