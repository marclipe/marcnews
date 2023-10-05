import { FaGoogle } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGoogle color="#04D361" />
      MarcLipe
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGoogle color="#536DFE" />
      Sign in with GitHub
    </button>
  );
}