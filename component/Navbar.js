import {useSession, signOut, signIn} from 'next-auth/react'
// 07914253609 
function NavBar() {
    const {data: session} = useSession()
    return ( 
        <div className='flex sticky w-full h-16 bg-gradient-to-tr from-blue-100 to-blue-500 rounded-t-xl p-4'>
            <a className='font-dancing text-gray-800 text-2xl' href="#">ToDo</a>  
            <ul className='w-full flex justify-end text-gray-100 text-md'>
                <li className='list-none'>
                    {session ? <a href="#" onClick={()=>signOut()}>Sign out</a> : <a className='nav-link' href="#" onClick={()=>signIn()}>Sign in</a>}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;