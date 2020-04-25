import React from 'react'
import {connect} from 'react-redux'
import Home from './home'
import Index from './index'
import Modal from './modal'
import {Row,Col,Navbar, Button, Form} from 'react-bootstrap'

class ChatComponent extends React.Component{

    state = {
        message : {},
        othersMessage : []
    }

    componentDidMount(){
        console.log("chat",this.props.username)
        this.ws = new WebSocket('ws://localhost:8081/chat/'+this.props.username);

        this.ws.addEventListener("message",(mes)=>{
            console.log("res",mes)
            this.setState({
                othersMessage : [...this.state.othersMessage, JSON.parse(mes.data)]
            })
        })
    }

    sendMessage = () =>{
        this.ws.send(JSON.stringify(this.state.message));
        this.setState({
            othersMessage : [...this.state.othersMessage, this.state.message]
        })
    }

    onChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            message : {
                sender : this.props.username,
                recipient : this.props.match.params.to,
                content : event.target.value
            }
        })
        
    }

    renderComponent = () => {
        return <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">{this.props.match.params.to}</Navbar.Brand>
            </Navbar>
            <Row>
            <div style={{overflow:"scroll",width:"100%",height:"60vh",display:"block"}}>
            {this.state.othersMessage.map((mes)=>{
                    return mes.sender == this.props.username ?  
                        <Row><Col></Col><Col><p className={"msg_cotainer_right"}>{mes.content}</p></Col></Row>: 
                        <Row><Col><p className={"msg_cotainer_left"}>{mes.content}</p></Col><Col></Col></Row>
                })}
            </div>
            </Row>
            <Navbar bg="dark" variant="dark">
                <Form.Control style={{width:"95%"}} type="text" name="message" onChange={this.onChangeHandler}/>
                <Button style={{marginLeft:"1%"}} onClick={this.sendMessage}>Send</Button>
            </Navbar>
            </div>
            
    }

    render(){
        return (
            <div>
                {/* <Modal /> */}
                {this.renderComponent()}
            </div>
        )
    }
}

const mapStateFromProps = (state) => {
    return {
        username : state.user.username
    }
}

export default connect(mapStateFromProps)(ChatComponent)