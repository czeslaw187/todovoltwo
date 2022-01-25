import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import Record from '../component/Record';
import Foot from '../component/Footer.js'
import {connect} from 'react-redux'
import * as actionCreators from '../lib/actions.js'
import {signIn, useSession, signOut} from 'next-auth/react'

function Home(props) {
  const {data: session} = useSession()
  const [inp, setInp] = useState('')
  let stat = props.todos
  let statCp = props.todosCp
  stat = stat.length > 0 ? stat : []
  useEffect(()=>{
    props.loadData()
  }, [])

  if (session) {
    return (
      <Container className={styles.grid}>
        {console.log(session.user.email.concat('_database'))}
          <Row>
            <Button color="primary" onClick={()=>signOut()}>Sign Out</Button>
          </Row>
          <Row>
            <Col>
              <form onSubmit={(e)=>{e.preventDefault(); props.insertData(inp); setInp('')}}>
                <input type="text" className={todoStyle.input} onChange={(e)=>{setInp(e.target.value)}} value={inp} placeholder="What need to be done?"/>
              </form>
            </Col>
          </Row>
          <Row>
            <div>
                {stat.map((el)=>(
                  <Record key={el.id} record={el} rd={props}/>
              ))}
            </div>
          </Row>
          <Row>
            {(stat.length > 0) || (statCp.length > 0) ? <Foot left={stat.length} rd={props} clearInp={setInp} /> : null}
          </Row>
          
      </Container>
    )
  } else {
    return <Button color="primary" onClick={()=>signIn()}>Sign In</Button>
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    todosCp: state.todosCp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertData: (data)=>{dispatch(actionCreators.insertTodo(data))},
    loadData: ()=>{dispatch(actionCreators.loadTodo())},
    removeData: (id)=>{dispatch(actionCreators.removeTodo(id))},
    changeAct: (id,act)=>{dispatch(actionCreators.changeActive(id,act))},
    removeAllData: ()=>{dispatch(actionCreators.removeAllTodo())},
    getActiveData: ()=>{dispatch(actionCreators.filterActiveTodo())},
    clearData: ()=>{dispatch({type: 'CLEAR_ALL'})},
    getCompleteData: ()=>{dispatch(actionCreators.filterCompleteTodo())},
    getAll: ()=>{dispatch(actionCreators.getAllTodos())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)