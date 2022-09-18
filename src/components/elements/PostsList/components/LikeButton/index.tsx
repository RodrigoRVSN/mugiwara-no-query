import { StarIcon } from '@chakra-ui/icons'
import { Box, IconButton } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import PostsService from '@App/core/services/PostsService'
import { ILike } from '@App/core/types/IPost'

interface ILikeButton {
  likes?: ILike[]
  postId: string
}

export const LikeButton = ({ likes, postId }: ILikeButton) => {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const isLiked = likes?.find((like) => like.postId === postId)

  const { isLoading, mutate } = useMutation(
    () => PostsService.likePost(String(session?.user?.id), postId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts'])
      },
    },
  )

  return (
    <Box gap={2} display='flex' alignItems='center' mt={4}>
      <IconButton
        aria-label='Curtir postagem'
        icon={<StarIcon />}
        onClick={() => mutate()}
        color={isLiked ? 'red.400' : 'blue.700'}
        backgroundColor='transparent'
        isLoading={isLoading}
      />
      {isLoading ? (
        '...'
      ) : (
        <span>{likes ? likes.length : 0} favoritado(s)</span>
      )}
    </Box>
  )
}
