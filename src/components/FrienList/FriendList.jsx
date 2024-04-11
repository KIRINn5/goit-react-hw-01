/* eslint-disable react/prop-types */
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";


// eslint-disable-next-line react/prop-types
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
