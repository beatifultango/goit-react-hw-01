import React from "react";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.list}>
      <img className={styles.avatar} src={avatar} />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>{isOnline?"Online":"offline"}</p>
    </li>
  );
};

export default FriendListItem;
