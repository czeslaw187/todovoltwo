import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import {useSession, signIn} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

function Login() {
    const router = useRouter()
    const {data: session, status} = useSession()
    useEffect(()=>{
        if (session) {
            router.push('/home')
        }
    },[session, status])
    return ( 
        <Container className={styles.main}>
            <Row>
                <Col>
                    <h1 className={styles.titleHeading}>to do...</h1>
                </Col>
            </Row>
        </Container>
     );
}

export default Login;