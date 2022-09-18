import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'db'

interface BodyParams {
  userId: string
}

interface QueryParams {
  postId: string
}

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const { userId } = request.body as unknown as BodyParams
    const { postId } = request.query as unknown as QueryParams

    const likeExists = await prisma.like.findFirst({
      where: {
        userId,
        postId,
      },
    })

    if (likeExists) {
      const postNew = await prisma.like.delete({
        where: {
          id: likeExists.id,
        },
      })

      return response.status(200).json(postNew)
    }

    const postNew = await prisma.like.create({
      data: {
        postId,
        userId,
      },
    })

    return response.status(201).json(postNew)
  } catch (error) {
    console.log({ error })
    response.status(400).json(error)
  }
}
