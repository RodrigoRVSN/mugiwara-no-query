import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Layout } from '@App/components/layout/Layout'

const queryClient = new QueryClient()

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <ReactQueryDevtools initialIsOpen={false} />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}
