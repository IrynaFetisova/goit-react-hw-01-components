import PropTypes from 'prop-types';
import s from './Profile.module.css';

export function Profile({ avatar, location, tag, username, stats: { followers, views, likes  } }) {
  return (
    <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={s.avatar}
        width={150}
        height={150}
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className={s.label}>Followers</span>
        <span className={s.quantiti}>{followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Views</span>
        <span className={s.quantiti}>{views}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Likes</span>
        <span className={s.quantiti}>{likes}</span>
      </li>
    </ul>
  </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
