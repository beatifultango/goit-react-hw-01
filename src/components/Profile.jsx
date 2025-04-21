import React from "react";
import profileCss from "./"
const Profile = () => {
  return (
    <div className="profile-card">
      
      <ul>
        <li>
          <span>Followers </span>
          <span>{userData.stats.followers}</span>
        </li>
        <li>
          <span>views</span>
          <span>{userData.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
