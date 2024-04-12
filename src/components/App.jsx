import Profile from './Profile/Profile';
import userData from '../userData.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.userData.username}
        tag={userData.userData.tag}
        location={userData.userData.location}
        image={userData.userData.avatar}
        stats={userData.userData.stats}
      />
      <FriendList friends={friends.friends} />
      <TransactionHistory items={transactions.transactions} />
    </>
  );
};

export default App;
