import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem/FriendsListItem';
import s from './FriendsList.module.css';

export function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <FriendsListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendsList.PropTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired, 
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })).isRequired,
};
