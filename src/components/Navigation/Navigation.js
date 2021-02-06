import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo'
import styles from './Navigation.module.scss'
import Search from '../Search/Search'

function Navigation () {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'><Logo variant='dark' /></Link>
        </li>
        <li>
          <Link to='/gebaeude'>Gebäude</Link>
        </li>
        <li>
          <Link to='/pupulation-groups'>Bevölkerungsgruppen</Link>
          <ul className={styles.navSubmenu}>
            <li>
              <Link to='/bauern'>Bauern</Link>
            </li>
            <li>
              <Link to='/undso'>Undso</Link>
            </li>
          </ul>
        </li>
      </ul>

      <Search formInputClass={styles.navSearch} />
    </nav>
  )
}

export default Navigation
