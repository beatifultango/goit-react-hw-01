import React from "react";
import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div>
      <div className={styles.profileCard}>
        <img src={image} alt="User Avatar" />
        <div>
          <p class={styles.name}>{name}</p>
          <p><span class={styles.tag}>@{tag}</span></p>
          <p>{location}</p>
        </div>

        <ul class={styles.stats}>
          <li>
            <span>Followers </span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
