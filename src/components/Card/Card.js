import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavoriteCard } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();
  const [ isFavorite, setIsFavorite ]  = useState(props.isFavorite);
  const cardId = props.cardId;

  const handleClick = e => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(toggleFavoriteCard( cardId ));
  };

  return (
   <li className={styles.card}>{props.title}
      <button
        className={clsx(styles.fav_button, isFavorite && styles.isFavorite)}
        onClick={handleClick}>
          <i className="fa fa-star-o"></i>
      </button>
    </li>

  );
};

export default Card;
