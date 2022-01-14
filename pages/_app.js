import Layout from '../component/Layout'
import '../styles/globals.css'
import React,{useState} from 'react'

function MyApp({ Component, pageProps }) {
  const [glob, setGlob] = useState([])
  return (
    <Layout>
      <Component {...pageProps} stat={glob} setStat={setGlob}/>
    </Layout>
  )
}

export default MyApp
