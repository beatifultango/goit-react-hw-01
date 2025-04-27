import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import React from "react";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
