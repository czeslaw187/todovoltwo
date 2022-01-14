import Layout from '../component/Layout'
import '../styles/globals.css'
import React,{useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [glob, setGlob] = useState([])
  return (
    <Layout stat={glob} setStat={setGlob}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
