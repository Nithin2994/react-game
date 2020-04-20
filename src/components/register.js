import React from 'react'
import gameserver from '../apis/gameserver'
import {saveUser} from '../actions/useraction'
import {connect} from 'react-redux'
import RegisterFormComponent from './registerFormComponent'

class Register extends React.Component{

    state = {errorMessage : ""}
    register = async (username,password,email,mobileNo) =>{
        let response = await gameserver.post("/register",{
                playerName:username,
                    password:password,
                    email:email,
                    mobileNo:mobileNo
            
        })

        console.log(response)
        if(response != null & response.data.status== "Success"){
            this.props.saveUser(username, response.data.token)
        }else{
            this.setState({
                errorMessage : "Invalid Credentials"
            })
        }
    }

    render(){
        return <div>
            <h2>Register</h2>
            <RegisterFormComponent onRegisterClick={this.register}/>
            <div style={{color:"red"}}>{this.state.errorMessage}</div>
        </div>
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps,{saveUser})(Register)