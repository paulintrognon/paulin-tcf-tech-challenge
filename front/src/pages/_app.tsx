import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import Layout from '../components/Layout/Layout'
import { BASE_API_URL } from '../services/api/api'
import '../styles/styles.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      fetcher: (url, init) => {
        return fetch(`${BASE_API_URL}${url}`, init).then((res) => res.json())
      },
    }}
  >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SWRConfig>
)

export default App
