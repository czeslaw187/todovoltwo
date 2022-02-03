import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import {useEffect} from 'react'
import {useSession, signOut, signIn} from 'next-auth/react'
// 07914253609 
function NavBar() {
    const {data: session} = useSession()
    return ( 
        
        <div className='bg-black'> 
                <a className={navStyle.brand} href="#">ToDo</a>               
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#myNavbar'>
                    <span className='navbar-toggler-icon' ></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='myNavbar'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='d-flex justify-content-end'>
                            {session ? <a href="#" onClick={()=>signOut()}>Sign out</a> : <a className='nav-link' href="#" onClick={()=>signIn()}>Sign in</a>}
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default NavBar;