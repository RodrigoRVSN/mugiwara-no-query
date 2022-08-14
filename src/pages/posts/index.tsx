import { Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { CreatePost } from '@App/components/elements/CreatePost'
import { PostsList } from '@App/components/elements/PostsList'

const Posts = () => {
  const { data: session } = useSession()

  return (
    <>
      <Text>eaeeee {session?.user?.name}</Text>
      <CreatePost />
      <PostsList />
    </>
  )
}

export default Posts
