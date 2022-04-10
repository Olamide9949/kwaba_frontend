import styles from '../../styles/Home.module.css';
import * as Icon from '@heroicons/react/outline';
import Link from 'next/link';

const Navbar = () =>{
    return (
        <nav className={styles.navbar}>
        <ul>
          <li><Link href={'/'}><a><h2>My Rent</h2></a></Link></li>
          <li><Icon.MenuAlt3Icon color={'#29405e'} width={25} height={25}/></li>
        </ul>
      </nav>
    )
}
export default Navbar;