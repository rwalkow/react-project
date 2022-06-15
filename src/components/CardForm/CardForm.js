import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux.js';

const CardForm = props => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    let columnId = props.columnId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title, columnId}))
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;





