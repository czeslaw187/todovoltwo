import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'

function Home({stat, setStat, resJson}) {
  useEffect(()=>{
    setStat(resJson)
  })
  console.log(stat)
  return (
    <Container className={styles.grid}>
      {stat.map((el)=>(
        <Row className={todoStyle.box}>
          <Col xs="9">
            <p className={todoStyle.pargh}>{el.content}</p>
          </Col>
          <Col xs="3">
            <Button>X</Button>
          </Col>
        </Row>
    ))}
    </Container>
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