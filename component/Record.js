import styles from '../styles/Home.module.css'
import todoStyle from '../styles/Todo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import checkStyle from '../styles/Checkbox.module.css'
import { useEffect, useState } from 'react';
import {useSession} from 'next-auth/react'

function Record({record, rd, session}) {
    // const {data: session} = useSession()
    const [del,setDel] = useState(false)
    const [act,setAct] = useState(record.isActive)
    useEffect(()=>{
        if (del) {
            rd.removeData(record.id, session.user.email)
        }
    },[del])
    return ( 
        <Container>
            <Row className={todoStyle.box}>
                <Col xs="1" className={checkStyle.round}>
                    <input type="checkbox" id={record.id} checked={act} onChange={()=>{rd.changeAct(record.id, !record.isActive); setAct(!record.isActive)}}/>
                    <label htmlFor={record.id}></label>                       
                </Col>
                <Col xs="10" className={todoStyle.paragh}>
                    <p className={!act ? todoStyle.paragh : todoStyle.disabled}>{record.content}</p> 
                </Col>
                <Col xs="1" >
                    <Button close onClick={()=>{setDel(true)}} />
                </Col>
            </Row>
        </Container>
     );
}


export default Record;