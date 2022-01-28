import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav} from 'reactstrap'
import {useSession, signOut, signIn} from 'next-auth/react'
// 07914253609 
function Navbar() {
    const {data: session} = useSession()
    return ( 
        <Navbar color='ligh' expand='md' light>
            <NavbarBrand  className={navStyle.brand} href='#'>
                ToDo
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}}/>
            <Collapse navbar/>
            <Nav className='me-auto' navbar>
                <NavItem>
                    {session ? <NavLink href="#" onClick={()=>signOut()}>Sign out</NavLink> : <NavLink href="#" onClick={()=>signIn()}>Sign in</NavLink>}
                </NavItem>
            </Nav>
        </Navbar>

        // <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light">
        //     <div className='container-fluid'> 
        //         <a className={navStyle.brand} href="#">ToDo</a>               
        //         <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#myNavbar'>
        //             <span className='navbar-toggler-icon' ></span>
        //         </button>
        //         <div className='collapse navbar-collapse justify-content-end' id='myNavbar'>
                    
        //             <ul className='navbar-nav ml-auto'>
        //                 <li className='nav-item'>
        //                     {session ? <a className='nav-link' href="#" onClick={()=>signOut()}>Sign out</a> : <a className='nav-link' href="#" onClick={()=>signIn()}>Sign in</a>}
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navbar;