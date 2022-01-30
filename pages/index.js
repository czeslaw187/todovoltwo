import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

function Login() {
    const router = useRouter()
    const {data: session} = useSession()
    useEffect(()=>{
        if (session) {
            router.push('/home')
        }
    },[session, router])
    return ( 
        <div className={styles.main}>
            <div>
                <h1 className={styles.titleHeading}>to do...</h1>
            </div>
        </div>
     );
}

export default Login;