import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap'
import Record from '../component/Record';
import Foot from '../component/Footer.js'
import {connect} from 'react-redux'
import * as actionCreators from '../lib/actions.js'

function Home(props) {
  console.log(props)
  const [inp, setInp] = useState('')
  let stat = props.todos
  stat = stat.length > 0 ? stat : []
  useEffect(()=>{
    props.loadData()
  }, [])
  
  console.log(stat,'index')
  return (
    <Container className={styles.grid}>
        <Row>
          <Col>
            <form onSubmit={(e)=>{e.preventDefault(); props.insertData(inp)}}>
              <input type="text" className={todoStyle.input} onChange={(e)=>{setInp(e.target.value)}}/>
            </form>
          </Col>
        </Row>
        <Row>
          <div>
              {stat.map((el)=>(
                <Record key={el.id} record={el} />
            ))}
          </div>
        </Row>
        <Row>
          <Foot left={stat.length}/>
        </Row>
    </Container>
  )
}


function mapStateToProps(state) {
  return {todos: state.todos}
}

function mapDispatchToProps(dispatch) {
  return {
    insertData: (data)=>{dispatch(actionCreators.insertTodo(data))},
    loadData: ()=>{dispatch(actionCreators.loadTodo())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)