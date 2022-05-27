import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label>Title:</label>
      <TextInput type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      <label>Description:</label>
      <TextInput type="text"  id="description" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add List</Button>
    </form>
  )
};

export default ListForm;
