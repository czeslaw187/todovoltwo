import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'

function Foot({left, rd, clearInp, session}) {
    return ( 
        <div className={todoStyle.box}>
            <div>
                {left} items left
            </div>
            <div>
                <button role="button" onClick={()=>{rd.getAll()}}>All</button>
                <button role="button" onClick={()=>{rd.getActiveData()}}>Active</button>
                <button role="button" onClick={()=>{rd.getCompleteData()}}>Completed</button>
            </div>
            <div>
                <button onClick={()=>{rd.removeAllData(session.user.email); clearInp('')}}>Clear All</button>
            </div>
        </div>
     );
}

export default Foot;