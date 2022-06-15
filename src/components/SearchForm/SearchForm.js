import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, searchInputValue } from '../../redux/searchStringRedux.js';

const SearchForm = () => {
  const dispatch = useDispatch();
  const currentSearchInputValue = useSelector(searchInputValue);
  const [searchInput, setSearchInput] = useState(currentSearchInputValue);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchInput))
  }

    return (
      <form className={styles.searchForm} onSubmit={handleSubmit}> 
        <TextInput placeholder="Search . . ." onChange={e => setSearchInput(e.target.value)} value={searchInput} />
          <Button>
            <span className="fa fa-search" />
          </Button>
        </form>
    );
  };

export default SearchForm;
