import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'reactstrap'
import {useSession, signIn} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useEffect } from 'react';

function Login() {
    const router = useRouter()
    const {data: session} = useSession()
    useEffect(()=>{
        if (session) {
            router.push('/home')
        }
    },[session])

    return ( 
        <Container>
            <Row>
                <Col>
                    <Button color="primary" onClick={()=>signIn()}>Sign In</Button>
                </Col>
            </Row>
        </Container>
     );
}

export default Login;