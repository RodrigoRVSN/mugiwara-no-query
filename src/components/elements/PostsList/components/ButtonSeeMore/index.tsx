import { Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ButtonSeeMoreProps {
  fetchNextPage: () => void
  hasNextPage?: boolean
}

export const ButtonSeeMore = ({ fetchNextPage, hasNextPage }: ButtonSeeMoreProps) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

  return (
    <Button
      ref={ref}
      onClick={() => fetchNextPage()}
      disabled={!hasNextPage}
    >
      Carregar mais
    </Button>
  )
}
