import React  from "react";
import userPhoto from "../../assets/images/user-search.png";
import styles from "./Users.module.css";

let Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={e => {
                props.onPageChanged(p);
              }}
            >
              {` ${p} `}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                className={styles.userPhoto}
                alt=""
              />
            </div>
            <span>
              <div>{u.name}</div>
            </span>
            <span>
              <div>{u.status ? u.status : "no status"}</div>
            </span>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
