import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <span className="fa fa-tasks" />
        <ul className={styles.nav_list}>
          <li><NavLink className= { ({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li><NavLink className= { ({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorites">Favorites</NavLink></li>
          <li><NavLink className= { ({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
