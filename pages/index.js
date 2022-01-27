import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import {useSession, signIn} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

function Login() {
    const router = useRouter()
    const {data: session} = useSession()
    useEffect(()=>{
        if (session) {
            router.push('/home')
        }
    },[session])

    return ( 
        <Container className={styles.main}>
            <Row>
                <Col>
                    <Button color="primary" onClick={()=>signIn('google')}>Sign In</Button>
                </Col>
            </Row>
        </Container>
     );
}

export default Login;