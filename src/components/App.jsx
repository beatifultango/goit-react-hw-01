import React from "react";
import Profile from "./Profile";
import friends from "./friendList.json";
import FriendList from "./FriendList";

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

      <div>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              <FriendList
                name={friend.name}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
