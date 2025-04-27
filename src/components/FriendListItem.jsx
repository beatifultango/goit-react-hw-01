import styles from "./FriendList.module.css";

import React from "react";

const FriendListItem = ({ friends }) => {
  
  return (
    <>
    
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className={styles.list}>
            <img
              src={friend.avatar}
              alt={friend.name}
              className={styles.avatar}
            />
            <p className={styles.friend}>{friend.name}</p>
            <p style={{ color: friend.status ? "green" : "red" }}>
              {friend.status ? "online" : "offline"}
            </p>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default FriendListItem;
