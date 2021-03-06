import {useSession, signOut, signIn} from 'next-auth/react'
import Link from 'next/link'
import {useRouter} from 'next/router'


function NavBar() {
    const {data: session} = useSession()
    const router = useRouter()
    return ( 
        <div className='flex sticky w-full h-16 bg-gradient-to-tr from-blue-100 to-blue-500 rounded-t-xl p-4'>
            <Link href='/'>
                <a className='font-dancing text-gray-800 text-2xl'>ToDo</a>
            </Link>  
            <ul className='w-full flex justify-end text-gray-100 text-md'>
                <li className='list-none'>
                    {session ? <a className='text-xl font-lg hover:text-sky-300 cursor-pointer' onClick={()=>handleSignOut()}>Sign out</a> : <a className='text-xl font-lg hover:text-sky-300' href='#' onClick={()=>signIn()}>Sign in</a>}
                </li>
            </ul>
        </div>
    );
}

export async function handleSignOut() {
   await signOut(()=>{
        router.push('/')
    })
    
}

export default NavBar;