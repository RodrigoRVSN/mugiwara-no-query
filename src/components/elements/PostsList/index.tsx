import { Avatar, Box, Flex, Spinner } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import PostsService from '@App/core/services/PostsService'

export const PostsList = () => {
  const { data, isLoading } = useQuery(['posts'], PostsService.getPosts)

  if (isLoading) return <Spinner color='blue.500' size='xl' />

  return (
    <Flex flexDirection='column' >
      {data?.map(item => (
        <Box key={item.id} display='flex' m={5}>
          <Avatar src={item.user.image} size='lg' loading='lazy'/>
          <Box m={3}>
            <span>{item.user.name}</span>
            <p>{item.content}</p>
          </Box>
        </Box>
      ))}
    </Flex>
  )
}
