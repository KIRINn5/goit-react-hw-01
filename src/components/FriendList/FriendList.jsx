import css from './Friendlist.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Friendlist = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
            <span
              className={clsx(css.status, {
                [css.online]: isOnline,
                [css.offline]: !isOnline,
              })}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired
  ),
};
