import { Avatar, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { IPost } from '@App/core/types/IPost'

interface IPostProps {
  post: IPost
}

export const Post = ({ post }: IPostProps) => {
  return (
    <Box
      display='flex'
      my={4}
      p={4}
      borderRadius={5}
      bg='blue.300'
      alignItems='center'
    >
      <Link href={`/users/${post.user.id}`}>
        <Avatar src={post.user.image} size='lg' loading='lazy' />
      </Link>
      <Box m={3}>
        <span>{post.user.name}</span>
        <p>{post.content}</p>
      </Box>
    </Box>
  )
}
