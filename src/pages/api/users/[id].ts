import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db'

interface QueryParams {
  id: string
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query as unknown as QueryParams

    const user = await prisma.user.findFirst({ where: { id } })

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}
