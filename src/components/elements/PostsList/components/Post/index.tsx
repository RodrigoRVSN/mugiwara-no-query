import { Avatar, Box } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { IPost } from '@App/core/types/IPost'

interface IPostProps {
  post: IPost
}

export const Post = ({ post }: IPostProps) => {
  const { data: session } = useSession()

  return (
    <Box
      display='flex'
      my={4}
      p={4}
      borderRadius={16}
      boxShadow='lg'
      bg='blue.300'
      alignItems='center'
    >
      <Link href={`/users/${post.user?.id}`}>
        <Avatar
          cursor='pointer'
          src={post.user?.image ?? session?.user?.image as string}
          size='lg'
          loading='lazy'
        />
      </Link>
      <Box mx={3}>
        <span>{post.user?.name ?? session?.user?.name}</span>
        <p>{post.content}</p>
      </Box>
    </Box>
  )
}
