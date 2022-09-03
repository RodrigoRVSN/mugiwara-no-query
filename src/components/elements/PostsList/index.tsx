import { Alert, AlertIcon, Box, Button, Flex, Spinner } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import PostsService from '@App/core/services/PostsService'
import { Post } from './components/Post'

export const PostsList = () => {
  const { data, status, refetch } = useQuery(['posts'], PostsService.getPosts, {
    staleTime: 20000,
  })

  const handleStatus = {
    loading: <Spinner color='blue.500' size='lg' m='auto' />,
    success: (
      <>
        {data?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </>
    ),
    error: (
      <Box>
        <Alert status='error'>
          <AlertIcon />
          Houve um erro ao carregar os posts :(
          <Button onClick={() => refetch()} ml='auto'>
            Tentar novamente
          </Button>
        </Alert>
      </Box>
    ),
  }

  return (
    <Flex flexDirection='column' w='full'>
      {handleStatus[status]}
    </Flex>
  )
}
