import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getColumnsByList,getListById } from '../../redux/store';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId ));
  const columns = useSelector(state => getColumnsByList(state, listId ));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>{listData.title}</h1>
      </header>
      <p className={styles.description}>{listData.description}</p>
                <section className={styles.columns}>
        {columns.map(column =>
          <Column key={column.id} {...column} />)}
                  </section>
      <ColumnForm />
    </div>
  );
};

export default List;




