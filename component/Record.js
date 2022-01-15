import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import checkStyle from '../styles/Checkbox.module.css'

function Record({record}) {
    return ( 
        <Container>
            <Row className={todoStyle.box}>
                <Col xs="1" className={checkStyle.round}>
                    <input type="checkbox" id={record.id}/>
                    <label htmlFor={record.id}></label>                       
                </Col>
                <Col xs="10" >
                    <p className={todoStyle.paragh}>{record.content}</p> 
                </Col>
                <Col xs="1" >
                    <Button close />
                </Col>
            </Row>
        </Container>
     );
}

export default Record;