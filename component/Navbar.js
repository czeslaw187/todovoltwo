import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSession, signOut} from 'next-auth/react'

function Navbar() {
    const {data: session} = useSession()
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container-fluid'>                
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#myNavbar'>
                    <span className='navbar-toggler-icon' ></span>
                </button>
                <div className='collapse navbar-collapse justify-content-between' id='myNavbar'>
                    <a className='navbar-brand' href="#">Navbar</a>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#" onClick={()=>signOut('google')}>{session ? 'Sign Out' : null}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;