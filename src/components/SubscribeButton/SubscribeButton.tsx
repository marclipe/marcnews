import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <button 
    type="button"
    className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}