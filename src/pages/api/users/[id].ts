import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db'

interface QueryParams {
  id: string
}

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const { id } = request.query as unknown as QueryParams

    const user = await prisma.user.findFirst({ where: { id } })

    response.status(200).json(user)
  } catch (error) {
    response.status(400).json(error)
  }
}
