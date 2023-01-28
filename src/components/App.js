// import { } from "./index.css";

import user from './UserProfile/user.json';
import { UserProfile } from './UserProfile';
import data from './Statistics/data.json';
import { StatisticsProps } from './Statistics';
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory';

import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsProps title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
