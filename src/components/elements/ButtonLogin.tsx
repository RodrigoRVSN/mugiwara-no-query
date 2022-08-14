import { Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'

export const ButtonLogin = () => {
  const handleLogin = () => {
    signIn(undefined, { callbackUrl: '/posts' })
  }

  return (
    <Button colorScheme='blue' onClick={handleLogin}>Entrar com Github</Button>
  )
}
