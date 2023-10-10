import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const users = [
    {id: 1, name: 'Marcos'},
    {id: 2, name: 'Madson'},
    {id: 3, name: 'Miqueias'}
  ]

  return response.json(users)
}