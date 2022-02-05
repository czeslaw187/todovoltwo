import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useEffect } from 'react';

function Login() {
    const router = useRouter()
    const {data: session} = useSession()
    useEffect(()=>{
        if (session) {
            router.push('/home')
        }
    },[session, router])
    let subscription = Date.now() + 30*86400000
    console.log(subscription)
    return ( 
        <div className='bg-gradient-to-bl from-indigo-100 to-indigo-400 h-full flex flex-col'>
            <div className='mx-auto w-full flex flex-row justify-center my-auto'>
                <h1 className='text-rose-400 text-9xl opacity-50'>to do...</h1>
            </div>
        </div>
     );
}

export default Login;