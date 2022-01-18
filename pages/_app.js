import Layout from '../component/Layout'
import '../styles/globals.css'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../lib/reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))


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
