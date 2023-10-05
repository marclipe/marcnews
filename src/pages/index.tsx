import Head from 'next/head'
import { PiHandsClapping } from 'react-icons/pi'
import styles from './home.module.scss'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home | marcnews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            <PiHandsClapping color="#536DFE" /> Hey, welcome
          </span>
          <h1>
            News about the <span>Tech</span> wold!
          </h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Pair programming" />
      </main>
    </>
  );
}
