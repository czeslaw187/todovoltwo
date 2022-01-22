import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import checkStyle from '../styles/Checkbox.module.css'
import { useEffect, useState } from 'react';

function Record({record, rd}) {
    const [del,setDel] = useState(false)
    const [act,setAct] = useState(record.isActive)
    useEffect(()=>{
        if (del) {
            rd.removeData(record.id)
        }
    },[del])
    return ( 
        <Container>
            <Row className={todoStyle.box}>
                <Col xs="1" className={checkStyle.round}>
                    <input type="checkbox" id={record.id} onChange={()=>{rd.changeAct(record.id, !record.isActive); setAct(!record.isActive)}} checked={act}/>
                    <label htmlFor={record.id}></label>                       
                </Col>
                <Col xs="10">
                    <p className={todoStyle.paragh}>{record.content}</p> 
                </Col>
                <Col xs="1" >
                    <Button close onClick={()=>{setDel(true)}} />
                </Col>
            </Row>
        </Container>
     );
}


export default Record;