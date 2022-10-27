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

FriendsList.proptype = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
