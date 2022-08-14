import { Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

const Posts = () => {
  const { data: session } = useSession()

  return (
    <Text>eaeeee {session?.user?.name}</Text>
  )
}

export default Posts
