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
        color='red.400'
        backgroundColor='transparent'
        isLoading={isLoading}
      />
      {likes ? likes.length : 0} favoritado(s)
    </Box>
  )
}
