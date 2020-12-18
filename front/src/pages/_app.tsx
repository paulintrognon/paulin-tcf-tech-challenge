import { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { BASE_API_URL } from '../services/api/api'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      fetcher: (url, init) => {
        console.log(`${BASE_API_URL}${url}`)
        return fetch(`${BASE_API_URL}${url}`, init).then((res) => res.json())
      },
    }}
  >
    <Component {...pageProps} />
  </SWRConfig>
)

export default App
