import React from "react";
import Profile from "./Profile";
import friends from "./FriendList.json";
import FriendList from "./FriendListItem";
import transactions from "./TransactionHistory.json";
import TransactionHistory from "./TransactionHistory";

import userData from "./userData.json";
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />

      <TransactionHistory item={transactions} />
    </>
  );
};

export default App;
