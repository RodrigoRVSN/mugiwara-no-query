import type { ChangeEvent } from 'react'
import { Box, Button, Textarea } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import PostsService from '@App/core/services/PostsService'

export const CreatePost = () => {
  const { data: session } = useSession()
  const [content, setContent] = useState('')
  const queryClient = useQueryClient()

  const isDisabled = content.length < 10

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  const submitContent = useMutation(() => {
    setContent('')
    return PostsService.createPost(content, session?.user?.id as string)
  }, {
    onSuccess: () => queryClient.invalidateQueries(['posts'])
  })

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
          submitContent.mutate()
        }}
        disabled={isDisabled}
        bg='blue.900'
        color='blue.100'
      >
        Enviar
      </Button>
    </Box>
  )
}
