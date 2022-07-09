import { Container } from './App.styled';
import user from 'user.json';
import data from 'data.json';
import transactions from 'transactions.json';
import friends from 'friends.json';
import { Statistics } from 'components/Statistics/Statistics';
import { Profile } from 'components/UserProfile/Profile/Profile';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Statistics title="Upload stats" statisticsData={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
