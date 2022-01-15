import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap'
import Record from '../component/Record';
import Foot from '../component/Footer.js'


function Home({stat, setStat, resJson}) {
  useEffect(()=>{
    setStat(resJson)
  })
  console.log(stat.lenght)
  return (
    <Container className={styles.grid}>
        <Row>
          <Col>
            <input type="text" className={todoStyle.input}/>
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