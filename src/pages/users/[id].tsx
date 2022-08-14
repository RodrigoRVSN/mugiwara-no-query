import { Box } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'
import UsersService from '@App/core/services/UsersService'
import { IUser } from '@App/core/types/IPost'

interface UserProps {
  user: IUser
}

export default function User ({ user } : UserProps) {
  const { data } = useQuery([`users/${user.id}`], () => UsersService.getUser(user.id), { initialData: user })

  return (
    <Box>
      <h1>oi {data?.name}</h1>
    </Box>
  )
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { id } = query
  const user = await UsersService.getUser(id as string)

  return { props: { user } }
}
