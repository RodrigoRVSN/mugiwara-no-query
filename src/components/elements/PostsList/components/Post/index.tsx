import { Avatar, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { IPost } from '@App/core/types/IPost'
import { LikeButton } from '../LikeButton'

interface IPostProps {
  post: IPost
}

export const Post = ({ post }: IPostProps) => {
  return (
    <Box boxShadow='lg' bg='blue.300' borderRadius={16} my={4} p={4}>
      <Box display='flex' alignItems='center'>
        <Link href={`/users/${post.user?.id}`}>
          <Avatar
            cursor='pointer'
            src={post.user?.image ?? ''}
            size='lg'
            loading='lazy'
          />
        </Link>
        <Box mx={3}>
          <span>{post.user?.name ?? '...'}</span>
          <p>{post.content}</p>
        </Box>
      </Box>

      <LikeButton likes={post.likes} postId={String(post.id)} />
    </Box>
  )
}
