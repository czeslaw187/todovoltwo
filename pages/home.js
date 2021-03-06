import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Record from '../component/Record';
import Footer from '../component/Footer.js'
import {connect} from 'react-redux'
import * as actionCreators from '../lib/actions.js'
import {useSession} from 'next-auth/react'
import Subscribe from './subscribe.js'

function Home(props) {
  const router = useRouter()
  const {data: session, status} = useSession()
  const [inputTodo, setInputTodo] = useState('')
  let stat = props.todos
  let statCp = props.todosCp  
  stat =  stat.length > 0 ? stat : []
  statCp = statCp.length > 0 ? statCp : []
  let daysLeft = Math.floor((props.isSubscribed[0] - Date.now()) / 86400000)

  useEffect(()=>{
    router.push('/home')
  },[props.isSubscribed])

  useEffect(()=>{
    if (!session) {
      router.push('/')
    } else if (session && (stat.length <= 0)) {
      props.loadData(session)
    }        
  },[])

  if (parseInt(props.isSubscribed[0]) < Date.now() || isNaN(props.isSubscribed[0])) {
    return <Subscribe />
  } else {
    return (
      <div className='flex-col bg-gradient-to-bl from-indigo-100 to-indigo-400 h-full'>
          <div className='p-4'>
            <p>Subscription ends in {daysLeft} days</p>
          </div>
          <form className='mx-auto mb-20 sm:w-6/12 w-full h-12 px-4 lg:px-0' onSubmit={(e)=>{e.preventDefault(); props.insertData(inputTodo, session.session.user.email); setInputTodo('')}}>
            <input className='w-full inline-block h-full border-2 border-gray-400 my-5 rounded-md' type="text" onChange={(e)=>{setInputTodo(e.target.value)}} value={inputTodo} placeholder="What need to be done?"/>
          </form>
          <div className='sm:w-6/12 w-full mx-auto px-4 lg:px-0'>
          {stat.map((el)=>(
                    <Record key={el.todo_id.toString()} record={el} rd={props} session={session}/>
                ))}
          </div>
          <div className='sm:w-6/12 w-full mx-auto px-4 lg:px-0 text-sm lg:text-md'>
            {(stat.length > 0) || (statCp.length > 0) ? <Footer key={'footer'} left={stat.length} rd={props} clearInput={setInputTodo} session={session}/> : null}
          </div>
      </div>
    )  
  }

      
    
  
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    todosCp: state.todosCp,
    isSubscribed: state.isSubscribed
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
