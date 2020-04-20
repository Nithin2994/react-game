import React from 'react'
import DisplayWallet from './displaywallet'
import Transaction from './transaction'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import histroy from '../history'
import {Button, Row, Col} from 'react-bootstrap'

class Wallet extends React.Component{

    renderComponent(){
        return  <div>
            <Row style={{padding:"1%"}}>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} onClick={()=>{histroy.push("/home")}}>back</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DisplayWallet />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Transaction/>
                </Col>
            </Row>
            
            </div>
    }
    
    render(){
        return <div>
            {
                this.props.username ? this.renderComponent() : "Illegal access to this page"
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.user.username
    }
}

export default connect(mapStateToProps)(Wallet)