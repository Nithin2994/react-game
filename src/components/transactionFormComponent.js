import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, Button, Jumbotron} from 'react-bootstrap'

class TransactionForm extends React.Component{

    renderInput({input,type,name,lable,meta}){
        return <Form.Group controlId={lable}>
            <Form.Label>{lable}</Form.Label>
            <Form.Control {...input} type={type} name={name}/>
            <Form.Text>{( meta.touched && meta.error )? <div style={{color:"red"}}>{meta.error}</div> : "" } </Form.Text>
        </Form.Group>
    }

    renderSelect(field){
        return <Form.Group controlId={field.lable}>
            <Form.Label>{field.lable}</Form.Label>
            <Form.Control as="select" {...field.input} name={field.name}>
                {field.children}
            </Form.Control>
            <Form.Text>{( field.meta.error )? <div style={{color:"red"}}>{field.meta.error}</div> : "" } </Form.Text>
            </Form.Group>
    }

    transact = (formValues) => {
        console.log(formValues)
        this.props.transaction(formValues.type,formValues.currency,formValues.amount);
    }

    render(){
        return <Jumbotron style={{backgroundColor:"#24bfb8",border:"#24bfb8"}}>
            <h3>Transaction Form</h3>
         <Form onSubmit={this.props.handleSubmit(this.transact)}>
            <Field name="amount" lable="Amount" component={this.renderInput} type="number"></Field>
            <Field name="currency" lable="Currency" component={this.renderSelect} >
                <option value="NA">-select-</option>
                {
                this.props.currencies != null  && this.props.currencies.map((currency)=>{
                    return <option value={currency}>{currency}</option>
                })
                }
            </Field>
            <Field name="type" lable="TransactionType" component={this.renderSelect}>
                    <option value="NA">-select-</option>
                    <option value="debit">debit</option>
                    <option value="credit">credit</option>
            </Field>
            <Button variant="light" block type="submit">Submit</Button>
            </Form>
            </Jumbotron>
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.currency){
        errors.currency = "Select currency"
    }else if(!formValues.type){
        errors.type = "Select type"
    }else if(!formValues.amount || formValues.amount < 0){
        errors.amount = "Enter amount greater than 0"
    }
    return errors
}

export default reduxForm({
    form : 'Transaction',
    validate
})(TransactionForm)