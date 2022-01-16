import Layout from '../component/Layout'
import '../styles/globals.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../lib/reducer'

const store = createStore(reducer)


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    </Layout>
  )
}

export default MyApp
