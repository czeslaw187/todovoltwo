import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
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
      <div className={styles.main}>
          <form onSubmit={(e)=>{e.preventDefault(); props.insertData(inp, session.session.user.email); setInp('')}}>
            <input type="text" className={todoStyle.input} onChange={(e)=>{setInp(e.target.value)}} value={inp} placeholder="What need to be done?"/>
          </form>
          <div>
          {stat.map((el)=>(
                    <Record key={el.id} record={el} rd={props} session={session}/>
                ))}
          </div>
          <div>
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