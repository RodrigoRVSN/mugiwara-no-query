import { Box, Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bg='blue.900' minH='100vh'>
      <Container
        maxW='container.lg'
        bg='blue.100'
        boxShadow='inner'
        minH='100vh'
        borderRadius={16}
      >
        {children}
      </Container>
    </Box>
  )
}
