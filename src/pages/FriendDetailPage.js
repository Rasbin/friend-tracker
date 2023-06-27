import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { FriendsContext } from "../contexts/FriendsContext";
import { ProfileInfo } from "../components/ProfileInfo";

const FriendDetailPage = () => {
  const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
  const { friends } = useContext(FriendsContext);

  const { friendId } = useParams();
  const selectedFriend = friends.find(friend => friend.id === friendId)

  const isFavorite = favoriteIds.includes(friendId);

  return selectedFriend ? (
    <ProfileInfo
      person={selectedFriend}
      actionName={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      onAction={() => toggleFavorite(friendId)} />
  ) : (
    <>
      <p>Oops! Couldn't find that friend</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
}

export { FriendDetailPage };