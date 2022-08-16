import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db'

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  const { page } = req.query

  try {
    const posts = await prisma.post.findMany(
      {
        include: { user: true },
        orderBy: { created_at: 'desc' },
        take: 5,
        skip: Number(page)
      })

    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json(error)
  }
}
