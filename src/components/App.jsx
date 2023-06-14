import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import statData from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics statHeader="Upload data" statData={statData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

