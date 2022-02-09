import todoStyle from '../styles/Todo.module.css'
import checkStyle from '../styles/Checkbox.module.css'
import { useEffect, useState } from 'react';

function Record({record, rd, session}) {
    const [del,setDel] = useState(0)
    const [visibility,setVisibility] = useState(true)
    useEffect(()=>{
        if (del) {
            rd.removeData(record.todo_id, session.session.user.email)
        }
    },[del])
    return ( 
        <div className='flex flex-row align-middle justify-between bg-lime-100 rounded-md mx-auto w-full h-14 mb-1'>
            <div className={checkStyle.round}>
                <input type="checkbox" id={record.todo_id} checked={record.isActive} onChange={()=>{rd.changeAct(record.todo_id, !record.isActive, session.session.user.email)}}/>
                <label htmlFor={record.todo_id}></label>    
                

                               
            </div>            
            <div className='w-full flex justify-between' onMouseEnter={()=>setVisibility(false)} onMouseLeave={()=>setVisibility(true)}>
                <p className={`w-full mr-auto my-auto ml-4 ${record.isActive && 'text-slate-300 line-through'}`}>{record.content}</p> 
                <button className='text-gray-400 ml-auto text-xl mr-5' hidden={visibility} onClick={()=>{setDel(true)}}>X</button>
            </div>  
        </div>
     );
}


export default Record;