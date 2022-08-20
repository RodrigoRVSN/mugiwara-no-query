import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany(
      {
        include: { user: true },
        orderBy: { created_at: 'desc' }
      })

    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json(error)
  }
}
