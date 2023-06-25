import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { friendsData } from "../data";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { ProfileInfo } from "../components/ProfileInfo";

const FriendDetailPage = () => {
  const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
  const { friendId } = useParams();
  const selectedFriend = friendsData.find(friend => friend.id === friendId)

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