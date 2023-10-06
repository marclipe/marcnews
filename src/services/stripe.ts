import Stripe from 'stripe'
import { version } from '../../package.json'

const API_KEY = process.env.STRIPE_API_KEY as string

//API KEY
export const stripe = new Stripe(
  API_KEY,
  {
    apiVersion: '2023-08-16',
    appInfo: {
      name: "marcnews", 
      version
    },
  }
)