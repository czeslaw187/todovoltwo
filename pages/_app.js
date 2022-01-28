import Layout from '../component/Layout'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../lib/reducer'
import thunk from 'redux-thunk'
import {SessionProvider} from 'next-auth/react'
import '../styles/application.scss'

export const store = createStore(reducer, applyMiddleware(thunk))


export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}

