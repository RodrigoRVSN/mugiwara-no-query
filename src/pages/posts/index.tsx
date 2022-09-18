import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CreatePost } from '@App/components/elements/CreatePost'
import { PostsList } from '@App/components/elements/PostsList'

const Posts = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const handleSignOut = () => {
    signOut()
    router.replace('/')
  }

  return (
    <>
      <Head>
        <title>Página de postagens</title>
      </Head>

      <Box p={8}>
        <Flex alignItems='center' justifyContent='space-between'>
          {session?.user && (
            <>
              <Text>Fala mugiwara {session?.user?.name}, beleza?</Text>
              <Button leftIcon={<ChevronLeftIcon />} onClick={handleSignOut}>
                Sair
              </Button>
            </>
          )}
        </Flex>

        <CreatePost />

        <PostsList />
      </Box>
    </>
  )
}

export default Posts
