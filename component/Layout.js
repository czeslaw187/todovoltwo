import NavBar from './Navbar.js'

function Layout({children}) {
    return ( 
        <div>
            <NavBar />
            <div className='h-screen'>
                {children}
            </div>
        </div>        
     );
}



export default Layout;