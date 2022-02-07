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
        <div className='flex flex-row align-middle justify-between bg-lime-100 rounded-md mx-auto w-full h-14 mb-1'>
            <div className={checkStyle.round}>
                <input type="checkbox" id={record.todo_id} checked={record.isActive} onChange={()=>{rd.changeAct(record.todo_id, !record.isActive, session.session.user.email)}}/>
                <label className='mr-4 ml-1' htmlFor={record.todo_id}></label>    
                <p className={!record.isActive ? todoStyle.paragh : todoStyle.disabled}>{record.content}</p> 

                               
            </div>            
            <div className='opacity-0 hover:opacity-100 w-full flex justify-end'>
                <button className='text-gray-400 ml-auto text-xl mr-5' onClick={()=>{setDel(true)}}>X</button>
            </div>  
        </div>
     );
}


export default Record;