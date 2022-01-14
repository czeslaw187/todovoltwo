import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button} from 'reactstrap'
import checkStyle from '../styles/Checkbox.module.css'

function Record({record}) {
    return ( 
        <Row className={todoStyle.box}>
          <Col xs="1" className={todoStyle.mauto}>
            <div className={checkStyle.round}>
                <input type="checkbox" id={record.id}/>
                <label htmlFor={record.id}></label>
            </div>
          </Col>
          <Col xs="10"  className={todoStyle.paragh}>
            <p>{el.content}</p>
          </Col>
          <Col xs="1">
            <Button>X</Button>
          </Col>
        </Row>
     );
}

export default Record;