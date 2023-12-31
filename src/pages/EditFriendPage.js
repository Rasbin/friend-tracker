import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FriendsContext } from "../contexts/FriendsContext";
import { PersonInfoForm } from "../components/PersonInfoForm";

const EditFriendPage = () => {
  const { friendId } = useParams();

  const { friends, updateFriend } = useContext(FriendsContext);
  const selectedFriend = friends.find(f => f.id === friendId);
  const history = useHistory();

  const saveUpdatedInformation = updatedInfo => {
    updateFriend({
      ...updatedInfo,
      id: friendId,
    });
    history.push('/');
  }

  return (
    <>
      <h1>Edit Info</h1>
      <PersonInfoForm
        person={selectedFriend}
        onSubmit={saveUpdatedInformation}
        buttonText="Save Changes" />
    </>
  );
}

export { EditFriendPage };