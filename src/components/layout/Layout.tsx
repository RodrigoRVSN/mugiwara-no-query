import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW='container.sm' bg='blue.100'>
      {children}
    </Container>
  )
}
