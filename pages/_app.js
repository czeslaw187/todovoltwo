import Layout from '../component/Layout'
import '../styles/globals.css'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../lib/reducer'
import thunk from 'redux-thunk'
import {SessionProvider} from 'next-auth/react'

export const store = createStore(reducer, applyMiddleware(thunk))


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Layout>
      <Provider store={store}>
        <SessionProvider session={session} refetchInterval={5 * 60}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </Layout>
  )
}

