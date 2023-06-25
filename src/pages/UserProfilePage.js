import { myProfileData } from "../data";
import { ProfileInfo } from "../components/ProfileInfo";
import styles from './UserProfilePage.module.css';

const UserProfilePage = () => {
  return (
    <>
      <h2 className={styles.contentHeading}>My Profile</h2>
      <ProfileInfo person={myProfileData} />
    </>
  );
}

export { UserProfilePage };