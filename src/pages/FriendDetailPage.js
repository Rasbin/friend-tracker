import { useParams, Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { friendsData } from "../data";
import { ProfileInfo } from "../components/ProfileInfo";
const FriendDetailPage = ({ favoriteIds = [], onToggleFavorite }) => {
  const { friendId } = useParams();
  const selectedFriend = friendsData.find(friend => friend.id === friendId)

  const isFavorite = favoriteIds.includes(friendId);

  return selectedFriend ? (
    <ProfileInfo
      person={selectedFriend}
      actionName={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      onAction={() => onToggleFavorite(friendId)} />
  ) : (
    <>
      <p>Oops! Couldn't find that friend</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
}

FriendDetailPage.propTypes = {
  favoriteIds: PropTypes.arrayOf(PropTypes.string),
  onToggleFavorite: PropTypes.func.isRequired,
}

export { FriendDetailPage };