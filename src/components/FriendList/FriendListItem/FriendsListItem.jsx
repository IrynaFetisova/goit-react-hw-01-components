import PropTypes from 'prop-types';
import s from '../FriendsList.module.css';

export default function FriendsListItem({ isOnline, avatar, name, id }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsListItem.PropTypes = {
  id: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
