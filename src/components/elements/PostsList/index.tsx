import { Flex, Spinner } from '@chakra-ui/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import PostsService from '@App/core/services/PostsService'
import { ButtonSeeMore } from './components/ButtonSeeMore'
import { Post } from './components/Post'

export const PostsList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(['posts'],
    PostsService.getPosts,
    {
      getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
      getNextPageParam: (lastPage, allPages) => allPages.length + 1
    }
  )

  if (isLoading) return <Spinner color='blue.500' size='xl' />

  return (
    <Flex flexDirection='column' >
      {data?.pages.map(page =>
        page?.map(item => (
          <Post post={item} key={item.id} />
        ))
      )}

      <ButtonSeeMore
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </Flex>
  )
}
