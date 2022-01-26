import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import Navbar from '../component/Navbar.js'

function Layout({children}) {
    return ( 
        <div>
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
        </div>        
     );
}



export default Layout;