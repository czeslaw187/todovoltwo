import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import {useEffect} from 'react'
import {useSession, signOut, signIn} from 'next-auth/react'
// 07914253609 
function NavBar() {
    const {data: session} = useSession()
    useEffect(() => {
        if (typeof document !== undefined) {
          require('bootstrap/dist/js/bootstrap')         
        }
    }, [])
    return ( 
        
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
            <div className='container-fluid'> 
                <a className={navStyle.brand} href="#">ToDo</a>               
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#myNavbar'>
                    <span className='navbar-toggler-icon' ></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='myNavbar'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item d-flex justify-content-end my-2'>
                            {session ? <a className='nav-link' href="#" onClick={()=>signOut()}>Sign out</a> : <a className='nav-link' href="#" onClick={()=>signIn()}>Sign in</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;