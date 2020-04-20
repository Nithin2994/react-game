import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { Button, Form } from 'react-bootstrap';

class LoginFormComponent extends React.Component{

    renderInput({input, lable, meta, type}){
        //return <input onChange={formProps.input.onChange} value={formProps.input.value} type="text"/>
        console.log(meta)
        return (
                <Form.Group controlId={lable}>
                    <Form.Label>{lable}</Form.Label>
                    <Form.Control {...input} autoComplete="off" type={type} />
                    <Form.Text>
                    {
                        meta.touched && meta.error ? <div style={{color:"red"}}>{meta.error}</div> : ""
                    }
                    </Form.Text>
                </Form.Group>
            
        )
    }

    onSubmit = (formValues) => {
        this.props.onLoginClick(formValues.username, formValues.password)
    }

    render(){
        return <div>
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="username" component={this.renderInput} lable="Username" type="text"/>
                <Field name="password" component={this.renderInput} lable="Password" type="password"/>
                <Button block style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} variant="primary" type="submit">Login</Button>
            </Form>
            
        </div>
    }
}

const validate = formValues =>{
    const errors={}
    if(!formValues.username){
        errors.username = "Enter username" 
    }
    if(!formValues.password){
        errors.password = "Enter password" 
    }
    return errors;
}

export default reduxForm({
    form : 'FormCreate',
    validate
})(LoginFormComponent);

