import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        stats={user.stats}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
