import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'

function Layout({children}) {
    return ( 
        <div className={style.container}>
            <div className={style.main}>
                {children}
            </div>
        </div>
     );
}

export default Layout;