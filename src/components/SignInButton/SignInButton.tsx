import { FaGoogle } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
  const {data: session} = useSession()

  // console.log(session)

  return session ? (
    <button 
      className={styles.signInButton} 
      type="button"
      onClick={() => signOut()}
    >
      <FaGoogle color="#04D361" />
      {session.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      className={styles.signInButton} 
      type="button"
      onClick={() => signIn('google')}
    >
      <FaGoogle color="#536DFE" />
      Sign in with GitHub
    </button>
  );
}