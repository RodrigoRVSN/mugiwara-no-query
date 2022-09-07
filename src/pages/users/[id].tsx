import { Box, Button } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import UsersService from '@App/core/services/UsersService'
import { IUser } from '@App/core/types/IPost'

interface UserProps {
  user: IUser
}

export default function User({ user }: UserProps) {
  const { data } = useQuery(
    ['users', user.id],
    () => UsersService.getUser(user.id),
    { initialData: user },
  )

  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <Box p={8}>
        <Button onClick={goBack}>Voltar</Button>
        <h1>
          Olá {data?.name}, email {data?.email}
        </h1>
      </Box>
    </>
  )
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { id } = query
  const user = await UsersService.getUser(id as string)

  return { props: { user } }
}
