import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
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