import React from 'react'
import {connect} from 'react-redux'
import { findOpponent, pollOpponent } from '../actions/useraction'
import histroy from '../history'
import {Spinner, Button, Row, Col, Card} from 'react-bootstrap'

class PVPHome extends React.Component{

    state = {
        game : ""
    }

    componentDidMount(){
        if(this.props.match){
            this.props.findOpponent(this.props.match.params.game);
        }   
    }

    componentDidUpdate(){
        if(this.props.pvp.status != "FOUND"){
            this.props.pollOpponent();
        }else{
            // histroy.push("/game/"+this.props.pvp.gameId)
            if(this.props.match){
                console.log(this.props.match)
                histroy.push("/"+this.props.match.params.game)
            }
            
        }
    }

    render(){
        return <div>
             <Row>
                <Col>
                    <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} onClick={()=>{histroy.push("/home")}}>back</Button>
                </Col>
            </Row>
            <Card>
            <Card.Header style={{color:"white",backgroundColor:"#24bfb8",border:"#24bfb8"}}>
            <h1>Finding Opponent ...</h1>
            </Card.Header>
            <Card.Body>
            <Spinner size="lg" animation="border" />
            </Card.Body>
            </Card>

            </div>
            
    }
}

const mapStateToProps = (state) => {
    return {
        pvp : state.pvp
    }
}

export default connect(mapStateToProps,{findOpponent,pollOpponent})(PVPHome);