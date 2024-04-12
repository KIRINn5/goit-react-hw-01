import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ item }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.title}>
        <tr className={css.title__wrapper}>
          <th className={css.title__item}>Type</th>
          <th className={css.title__item}>Amount</th>
          <th className={css.title__item}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.content}>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.content__wrapper}>
              <td className={css.content__item}>{type}</td>
              <td className={css.content__item}>{amount}</td>
              <td className={css.content__item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ),
};
