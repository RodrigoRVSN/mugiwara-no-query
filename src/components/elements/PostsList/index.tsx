import { Avatar } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import PostsService from '@App/core/services/PostsService'

export const PostsList = () => {
  const { data } = useQuery(['posts'], PostsService.getPosts)

  return (
    <>
      {data?.map(item => (
        <div key={item.id}>
          <Avatar src={item.user.image} size='lg' loading='lazy'/>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  )
}
