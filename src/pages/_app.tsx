import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

export const queryClient = new QueryClient()

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}
