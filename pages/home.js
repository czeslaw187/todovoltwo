import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Record from '../component/Record';
import Foot from '../component/Footer.js'
import {connect} from 'react-redux'
import * as actionCreators from '../lib/actions.js'
import {signIn, useSession} from 'next-auth/react'

function Home(props) {
  const router = useRouter()
  const {data: session} = useSession()
  const [inp, setInp] = useState('')
  let stat = props.todos
  let statCp = props.todosCp
  stat = stat.length > 0 ? stat : []

  useEffect(()=>{
    if (!session) {
      router.push('/')
    } else {
      props.loadData(session)
    }
  },[session])
  // useEffect(()=>{
    
  // },[])
  return (
    <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <form className="form-control-group" onSubmit={(e)=>{e.preventDefault(); props.insertData(inp, session.user.email); setInp('')}}>
              <input type="text" className={todoStyle.input} onChange={(e)=>{setInp(e.target.value)}} value={inp} placeholder="What need to be done?"/>
            </form>
          </div>
        </div>
        <div className='row'>
          {stat.map((el)=>(
                  <Record key={el.id} record={el} rd={props}/>
              ))}
        </div>
        <div className='row'>
          {(stat.length > 0) || (statCp.length > 0) ? <Foot left={stat.length} rd={props} clearInp={setInp} /> : null}
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
    removeData: (id)=>{dispatch(actionCreators.removeTodo(id))},
    changeAct: (id,act)=>{dispatch(actionCreators.changeActive(id,act))},
    removeAllData: ()=>{dispatch(actionCreators.removeAllTodo())},
    getActiveData: ()=>{dispatch(actionCreators.filterActiveTodo())},
    clearData: ()=>{dispatch({type: 'CLEAR_ALL'})},
    getCompleteData: ()=>{dispatch(actionCreators.filterCompleteTodo())},
    getAll: ()=>{dispatch(actionCreators.getAllTodos())},

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)