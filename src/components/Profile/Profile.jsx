/* eslint-disable react/prop-types */
import css from "./Profile.module.css";

// eslint-disable-next-line react/prop-types
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>{" "}
        <p className={css.tag}>@{tag}</p>{" "}
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.profileStatsList}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span className={css.profileStatsItemSpan}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span className={css.profileStatsItemSpan}>{stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span className={css.profileStatsItemSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
