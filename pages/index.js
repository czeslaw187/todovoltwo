import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import checkStyle from '../styles/Checkbox.module.css'

function Home({stat, setStat, resJson}) {
  useEffect(()=>{
    setStat(resJson)
  })
  console.log(stat)
  return (
    <div className={styles.container}>
        <input type="text" className={todoStyle.input}/>
    <Container className={todoStyle.input}>
      {stat.map((el)=>(
        <Row className={todoStyle.box}>
          <Col xs="1" className={todoStyle.mauto}>
            <div className={checkStyle.round}>
                <input type="checkbox" id={el.id}/>
                <label htmlFor={el.id}></label>
            </div>
          </Col>
          <Col xs="10"  className={todoStyle.paragh}>
            <p>{el.content}</p>
          </Col>
          <Col xs="1">
            <Button>X</Button>
          </Col>
        </Row>
    ))}
    </Container>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const result = await fetch('http://localhost:3000/api/getAll')
    const resJson = await result.json()
    return {
      props: {resJson}
    }
  } catch(e) {
    console.log(e.message)
  }
}

export default Home