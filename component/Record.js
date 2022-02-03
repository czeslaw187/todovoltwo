import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import checkStyle from '../styles/Checkbox.module.css'
import { useEffect, useState } from 'react';

function Record({record, rd, session}) {
    const [del,setDel] = useState(0)
    useEffect(()=>{
        if (del) {
            rd.removeData(record.todo_id, session.session.user.email)
        }
    },[del])
    return ( 
        <div className={todoStyle.box}>
            <div className={checkStyle.round}>
                <input type="checkbox" id={record.todo_id} checked={record.isActive} onChange={()=>{rd.changeAct(record.todo_id, !record.isActive, session.session.user.email)}}/>
                <label htmlFor={record.todo_id}></label>    
                <div className={todoStyle.paragh}>
                    <p className={!record.isActive ? todoStyle.paragh : todoStyle.disabled}>{record.content}</p> 
                </div>                   
            </div>            
            <div>
                <button className='text-white font-extrabold text-3xl md:text-5xl' onClick={()=>{setDel(true)}}>X</button>
            </div>
        </div>
     );
}


export default Record;