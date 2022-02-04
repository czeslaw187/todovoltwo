import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Record from '../component/Record';
import Foot from '../component/Footer.js'
import {connect} from 'react-redux'
import * as actionCreators from '../lib/actions.js'
import {useSession} from 'next-auth/react'

function Home(props) {
  const router = useRouter()
  const {data: session, status} = useSession()
  const [inp, setInp] = useState('')
  let stat = props.todos
  let statCp = props.todosCp
  stat = stat.length > 0 ? stat : []
  useEffect(()=>{
    if (!session) {
      router.push('/')
    } 
    if (session) {
      props.loadData(session)
    }
  },[])
  
    return (
      <div className='flex-col bg-gradient-to-bl from-indigo-100 to-indigo-400 h-full'>
          <form className='mx-auto mb-20 lg:w-6/12 w-full h-12 px-4 lg:px-0' onSubmit={(e)=>{e.preventDefault(); props.insertData(inp, session.session.user.email); setInp('')}}>
            <input className='w-full inline-block h-full border-2 border-gray-400 my-5 rounded-md' type="text" onChange={(e)=>{setInp(e.target.value)}} value={inp} placeholder="What need to be done?"/>
          </form>
          <div className='lg:w-6/12 w-full mx-auto px-4 lg:px-0'>
          {stat.map((el)=>(
                    <Record key={el.id} record={el} rd={props} session={session}/>
                ))}
          </div>
          <div className='lg:w-6/12 w-full mx-auto px-4 lg:px-0 text-sm lg:text-md'>
           {(stat.length > 0) || (statCp.length > 0) ? <Foot left={stat.length} rd={props} clearInp={setInp} session={session}/> : null}
          </div>
      </div>
    )      
    
  
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    todosCp: state.todosCp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertData: (todoInput, userEmail)=>{dispatch(actionCreators.insertTodo(todoInput, userEmail))},
    loadData: (mySession)=>{dispatch(actionCreators.loadTodo(mySession))},
    removeData: (id, userEmail)=>{dispatch(actionCreators.removeTodo(id, userEmail))},
    changeAct: (id,act,userEmail)=>{dispatch(actionCreators.changeActive(id,act,userEmail))},
    removeAllData: (userEmail)=>{dispatch(actionCreators.removeAllTodo(userEmail))},
    getActiveData: ()=>{dispatch(actionCreators.filterActiveTodo())},
    clearData: ()=>{dispatch({type: 'CLEAR_ALL'})},
    getCompleteData: ()=>{dispatch(actionCreators.filterCompleteTodo())},
    getAll: ()=>{dispatch(actionCreators.getAllTodos())},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)