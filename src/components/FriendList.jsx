import styles from "./FriendList.module.css";


import React from 'react'


const friendList = ({avatar,name,isOnline}) => {
  return (
    <div className={styles.friend}>
        <div className={styles.list}>
            <img src={avatar} alt="avatar" className={styles.img} width="48"/>
            <p className={styles.name}>{name}</p>
            <p style={{color:isOnline?"green":"red"}}>{isOnline?"Online":"Offline"}</p>
        </div>
    </div>
  )
}




export default friendList
