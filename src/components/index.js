import React from 'react'
import Login from './login'
import Register from './register'
import {Container,Row,Col} from 'react-bootstrap'

const Index = (props) =>{
    return <div>
        <Container>
            <Row>
                <Col><Login /></Col>
                <Col><Register /></Col>
            </Row>
        </Container>
    </div>
}

export default Index