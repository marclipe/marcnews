import Image from 'next/image';
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton/SignInButton';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="Terminal icon" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>

        <SignInButton/>
      </div>
    </header>
  );
}