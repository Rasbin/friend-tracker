import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { FriendsContext } from '../contexts/FriendsContext';
import styles from './NewFriendPage.module.css';

const NewFriendPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const [interests, setInterests] = useState('');

  const { addFriend } = useContext(FriendsContext);
  const history = useHistory();

  const onCreateClicked = () => {
    const newFriend = {
      id: uuid(),
      name,
      profilePicUrl,
      age,
      bio,
      birthday,
      interests: interests.split(',').map(str => str.trim()),
    }

    addFriend(newFriend);
    history.push('/');
  }

  return (
    <>
      <h1>Add a New Friend</h1>
      <div className={styles.infoForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)} />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          placeholder="Age"
          type="number"
          value={age}
          onChange={e => setAge(Number(e.target.value))} />
        <label htmlFor="profile-pic-url">Profile Picture Url</label>
        <input
          id="profile-pic-url"
          placeholder="https://..."
          type="text"
          value={profilePicUrl}
          onChange={e => setProfilePicUrl(e.target.value)} />
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          placeholder="Tell us something about this friend..."
          value={bio}
          onChange={e => setBio(e.target.value)} />
        <label htmlFor="birthday">Birthday</label>
        <input
          id="birthday"
          placeholder="i.e. January 1"
          type="text"
          value={birthday}
          onChange={e => setBirthday(e.target.value)} />
        <label htmlFor="interests">Interests (separate with commas)</label>
        <input
          id="interests"
          placeholder="Food, movies, travel..."
          type="text"
          value={interests}
          onChange={e => setInterests(e.target.value)} />
        <button onClick={onCreateClicked}>Create</button>
      </div>
    </>
  );
}

export { NewFriendPage };