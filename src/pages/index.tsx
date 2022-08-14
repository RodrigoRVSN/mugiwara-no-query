import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { ButtonLogin } from '@components/elements/ButtonLogin'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ButtonLogin />
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx)

  if (session) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return { props: {} }
}
