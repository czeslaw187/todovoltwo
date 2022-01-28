import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import NavBar from '../component/Navbar.js'

function Layout({children}) {
    return ( 
        <div>
            <NavBar />
            <div className={styles.container}>
                {children}
            </div>
        </div>        
     );
}



export default Layout;