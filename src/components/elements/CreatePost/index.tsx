import type { ChangeEvent } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import PostsService from '@App/core/services/PostsService'
import { queryClient } from '@App/pages/_app'

export const CreatePost = () => {
  const { data: session } = useSession()
  const [content, setContent] = useState('')

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
    <>
      <Textarea placeholder='No que você está pensando meu cumpade?' onChange={handleChangeContent} value={content} />
      <Button
        onClick={() => {
          submitContent.mutate()
        }}
        disabled={isDisabled}
      >
        Enviar
      </Button>
    </>
  )
}
