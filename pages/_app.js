import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Page from '../components/templates/Page'

function MyApp({ Component, pageProps }) {
  return <SessionProvider session={pageProps.session}>
    <ThemeProvider attribute='class'>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  </SessionProvider>
}

export default MyApp
