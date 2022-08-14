import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db'

interface BodyParams {
  content: string
  userId: string
}

export default async function handle (req: NextApiRequest, res: NextApiResponse) {
  const { content, userId } = req.body as BodyParams

  try {
    const posts = await prisma.post.create({
      data: { content, userId }
    })

    res.status(201).json(posts)
  } catch (error) {
    console.log({ error })
    res.status(400).json(error)
  }
}
