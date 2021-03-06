import React from "react";
import userPhoto from "../../assets/images/user-search.png";
import styles from "./Users.module.css";
import { NavLink } from 'react-router-dom';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={styles.pages}>
        {pages.map(p => {
          return (
            <span className={props.currentPage === p ? styles.selectedPage : undefined} onClick={e => {
              props.onPageChanged(p);
            }} key={p}>
              {` ${p} `}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <span>
              <div>{u.name}</div>
            </span>
            <span>
              <div>{u.status ? u.status : "no status"}</div>
            </span>
            <span>
              <div>ID: {u.id}</div>
            </span>
            <div>
              {u.followed

                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.unfollow(u.id);
                }}> Unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                  props.follow(u.id);
                }}> Follow </button>}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
