import { Button, Flex, Spinner } from '@chakra-ui/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import PostsService from '@App/core/services/PostsService'
import { Post } from './components/Post'

export const PostsList = () => {
  const { ref, inView } = useInView()
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(['posts'],
    PostsService.getPosts,
    {
      getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
      getNextPageParam: (lastPage, allPages) => allPages.length + 1
    }
  )

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  if (isLoading) return <Spinner color='blue.500' size='xl' />

  return (
    <Flex flexDirection='column' >
      {data?.pages.map(page =>
        page?.map(item => (
            <Post post={item} key={item.id} />
        ))
      )}

      <Button
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
      >
        Carregar mais
      </Button>
    </Flex>
  )
}
