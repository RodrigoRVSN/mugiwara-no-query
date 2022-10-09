import type { ChangeEvent } from 'react'
import { Box, Button, Textarea } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import PostsService from '@core/services/PostsService'
import { IPost } from '@core/types/IPost'

export const CreatePost = () => {
  const { data: session } = useSession()
  const [content, setContent] = useState('')
  const queryClient = useQueryClient()

  const isDisabled = content.length < 2

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const submitContent = useMutation(
    () => PostsService.createPost(content, session?.user?.id as string),
    {
      onMutate: async (text: string) => {
        setContent('')
        await queryClient.cancelQueries(['posts'])

        const previousState = queryClient.getQueryData(['posts'])
        const optimisticPost = {
          content: text,
        }

        queryClient.setQueryData<IPost[]>(['posts'], (oldState) => {
          return [optimisticPost, ...(oldState ?? [])]
        })

        return { previousState }
      },
      onError: () => {
        const { previousState } = queryClient.getQueryData(['posts']) as {
          previousState: IPost
        }

        queryClient.setQueryData(['posts'], previousState)
      },
      onSuccess: () => queryClient.invalidateQueries(['posts']),
    },
  )

  return (
    <Box my={8}>
      <Textarea
        placeholder='No que você está pensando meu cumpade?'
        onChange={handleChangeContent}
        value={content}
        bg='blue.200'
        variant='filled'
        mb={8}
      />

      <Button
        onClick={() => {
          submitContent.mutate(content)
        }}
        disabled={isDisabled}
        bg='blue.900'
        color='blue.100'
        isLoading={submitContent.isLoading}
        data-testid='create__post--button'
      >
        Enviar
      </Button>
    </Box>
  )
}
