import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSession, signOut, signIn} from 'next-auth/react'
// 07914253609 
function Navbar() {
    const {data: session} = useSession()
    return ( 
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
            <div className='container-fluid'>                
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#myNavbar'>
                    <span className='navbar-toggler-icon' ></span>
                </button>
                <div className='collapse navbar-collapse justify-content-between' id='myNavbar'>
                    <a className={navStyle.brand} href="#">ToDo</a>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            {session ? <a className='nav-link' href="#" onClick={()=>signOut()}>Sign out</a> : <a className='nav-link' href="#" onClick={()=>signIn()}>Sign in</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;