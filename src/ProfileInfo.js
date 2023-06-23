import './ProfileInfo.css';

export const ProfileInfo = ({ person: { profilePicUrl, name, age, bio, birthday, interests } }) => {
  return (
		<>
			<div className="profile-pic-container">
				<div className="profile-pic-wrap">
					<img
						className="profile-pic"
						src={profilePicUrl}
						alt={`${name} profile picture`}
					/>
				</div>
			</div>
			<h2 className="content-heading">My Profile</h2>
			<h3>Name</h3>
			<p>{name}</p>
			<h3>Age</h3>
			<p>{age}</p>
			<h3>Bio</h3>
			<p>{bio}</p>
			<h3>Birthday</h3>
			<p>{birthday}</p>
			<h3>Interests</h3>
			<p>{interests.join(', ')}</p>
		</>
  );
}