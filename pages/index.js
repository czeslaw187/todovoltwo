import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap'
import Record from '../component/Record';
import Foot from '../component/Footer.js'
import {useSelector, useDispatch} from 'react-redux'
import {connect} from 'react-redux'
import * as actionCreators from '../lib/actions.js'

function Home({loadTodo, changeTodo}) {
  const [inp, setInp] = useState('')
  useEffect(()=>{
    loadTodo()
  }, [])
  const stat = useSelector(state=>state.todos)
  console.log(stat)
  return (
    <Container className={styles.grid}>
        <Row>
          <Col>
            <form onSubmit={(e)=>{handleSubmit(e, inp).then(resp=>{const sender={id: resp.id, content: inp, isActive: false} ;dispatch({action:"ADD_ITEM", payload:sender})})}}>
              <input type="text" className={todoStyle.input} onChange={(e)=>{setInp(e.target.value)}}/>
            </form>
          </Col>
        </Row>
        <Row>
          <div>
              {stat.map((el)=>(
                <Record record={el} />
            ))}
          </div>
        </Row>
        <Row>
          <Foot left={stat.length}/>
        </Row>
    </Container>
  )
}

// export async function getServerSideProps() {
//   try {
//     const result = await fetch('http://localhost:3000/api/getAll')
//     const resJson = await result.json()
//     return {
//       props: {resJson}
//     }    
//   } catch(e) {
//     console.log(e.message)
//   }
// }

export async function handleSubmit(e, input) {
  e.preventDefault()
  try {
    const result = await fetch('http://localhost:3000/api/insertTodo', {
      method: 'POST',
      body: JSON.stringify({data: input, active: false})
    })
    const resJson = await result.json()
    dispatch({type:'ADD_ITEM', payload:resJson})
    return resJson
  } catch(e) {
    console.log(e.message)
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, actionCreators)(Home)