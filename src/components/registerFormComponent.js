import React from 'react'
import { Field, reduxForm} from 'redux-form'
import { Form, Button} from 'react-bootstrap'

class RegisterFormComponent extends React.Component{

    renderInput({input, lable, type, meta}){
        return <Form.Group controlId={lable}>
                <Form.Label>{lable}</Form.Label>
                <Form.Control {...input} type={type} />
                <Form.Text>
                {
                    meta.touched && meta.error ? <div style={{color:"red"}}>{meta.error}</div> : "" 
                }
                </Form.Text>
            </Form.Group>
        
    }

    register = (formValues) => {
        this.props.onRegisterClick(formValues.username,formValues.password,formValues.email,formValues.mobileNo);
    }

    render(){
        return (
                <Form onSubmit={this.props.handleSubmit(this.register)}>
                    <Field name="username" component={this.renderInput} lable="Username" type="text"/>
                    <Field name="password" component={this.renderInput} lable="Password" type="password"/>
                    <Field name="repassword" component={this.renderInput} lable="Re-Password" type="password"/>
                    <Field name="email" component={this.renderInput} lable="Email" type="email"/>
                    <Field name="mobileNo" component={this.renderInput} lable="Mobile No" type="number"/>
                    <Button block style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} type="submit" >Register</Button>
                </Form>
        )
    }
}

const validate = (formValues) => {
    const errors= {}
    if(!formValues.username){
        errors.username = "Enter username"
    }
    if(!formValues.password){
        errors.password = "Enter password"
    }
    if(!formValues.repassword){
        errors.repassword = "Enter valid username"
    }
    if(formValues.password != formValues.repassword) {
        errors.repassword = "Not matching with password "
    }

    return errors
}
export default reduxForm({
    form : 'RegisterForm',
    validate : validate
})(RegisterFormComponent)