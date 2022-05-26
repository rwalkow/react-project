import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchInput } from '../../redux/store';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchInput(searchInput))
  }

    return (
      <form className={styles.searchForm} onSubmit={handleSubmit}> 
        <TextInput placeholder="Search . . ." onChange={e => setSearchInput(e.target.value)} />
          <Button>
            <span className="fa fa-search" />
          </Button>
        </form>
    );
  };

export default SearchForm;
