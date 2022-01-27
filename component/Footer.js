import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container} from 'reactstrap'

function Foot({left, rd, clearInp}) {
    return ( 
        <Container>
            <Row className={todoStyle.box}>
                <Col xs="3">
                   {left} items left
                </Col>
                <Col xs="6">
                    <Button color="secondary" outline onClick={()=>{rd.getAll()}}>All</Button>
                    <Button color="secondary" outline onClick={()=>{rd.getActiveData()}}>Active</Button>
                    <Button color="secondary" outline onClick={()=>{rd.getCompleteData()}}>Completed</Button>
                </Col>
                <Col>
                    <Button outline onClick={()=>{rd.removeAllData(); clearInp('')}}>Clear All</Button>
                </Col>
            </Row>
        </Container>
     );
}

export default Foot;