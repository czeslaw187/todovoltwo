import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import checkStyle from '../styles/Checkbox.module.css'
import { useEffect, useState } from 'react';

function Record({record, rd, session}) {
    const [del,setDel] = useState(false)
    const [act,setAct] = useState(record.isActive)
    useEffect(()=>{
        if (del) {
            rd.removeData(record.id, session.user.email)
        }
    },[del])
    return ( 
        <div className={todoStyle.box}>
            <div className={checkStyle.round}>
                <input type="checkbox" id={record.id} checked={act} onChange={()=>{rd.changeAct(record.id, !record.isActive, session.user.email); setAct(!record.isActive)}}/>
                <label htmlFor={record.id}></label>    
                <div className={todoStyle.paragh}>
                    <p className={!act ? todoStyle.paragh : todoStyle.disabled}>{record.content}</p> 
                </div>                   
            </div>            
            <div>
                <button onClick={()=>{setDel(true)}}>X</button>
            </div>
        </div>
     );
}


export default Record;