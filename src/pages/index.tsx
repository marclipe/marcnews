import Head from 'next/head'
import { PiHandsClapping } from 'react-icons/pi'
import styles from './home.module.scss'
import { SubscribeButton } from '@/components/SubscribeButton/SubscribeButton';
import { GetServerSideProps } from 'next';
import { stripe } from '@/services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for { product.amount } month</span>
          </p>
          <SubscribeButton/>
        </section>
        
        <img src="/images/avatar.svg" alt="Pair programming" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // API ID
  const price = await stripe.prices.retrieve("price_1NxvM6GLFm4pxeK9VWhgVyED", {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Number(price.unit_amount) / 100),
  };

  return {
    props: {
      product
    }
  }
}