import { Box } from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { ButtonLogin } from '@components/elements/ButtonLogin'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Falai | Início</title>
      </Head>

      <Box
        w='full'
        h='100vh'
        alignItems='center'
        justifyContent='center'
        display='flex'
      >
        <ButtonLogin />
      </Box>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx)

  if (session) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false,
      },
    }
  }

  return { props: {} }
}
