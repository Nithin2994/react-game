import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Form, Button, Table} from 'react-bootstrap'

class GameForm extends React.Component{

    renderInput({input,type,name,lable,meta}){
        return <Form.Group>
            <Form.Label>{lable}</Form.Label>
            <Form.Control {...input} type={type} name={name}/>
            <Form.Text>
            {( meta.touched && meta.error )? <div style={{color:"red"}}>{meta.error}</div> : "" } 
            </Form.Text>
        </Form.Group>
    }

    renderSelect(field){
        return <Form.Group controlId={field.lable}>
            <Form.Label>{field.lable}</Form.Label>
            <Form.Control as="select" {...field.input} name={field.name}>
                {field.children}
            </Form.Control>
            <Form.Text>
            {( field.meta.error )? <div style={{color:"red"}}>{field.meta.error}</div> : "" } 
            </Form.Text>
        </Form.Group>
    }

    generateScore = (formValues) =>{
        this.props.generateScore(formValues.leaderboardId)
    }

    render(){
        return <div>
           
            <Form onSubmit={this.props.handleSubmit(this.generateScore)}>
                <Field name="leaderboardId" lable="LeaderboardId" component={this.renderSelect}>
                    <option value="NA">--Select--</option>
                    {
                        this.props.leaderboards != null && this.props.leaderboards.map((lb) => {
                            return <option key={lb}>{lb}</option>
                        })
                    }
            </Field>
            <Button style={{backgroundColor:"#24bfb8",border:"#24bfb8"}} type="submit">Click here for score</Button>
            </Form>
        </div>
    }
}

const validate = (formValues) => {
    const errors ={}
    if(!formValues.leaderboardId || formValues.leaderboardId == "NA"){
        errors.leaderboardId = "Select leaderboard"
    }
    return errors
}

export default reduxForm({
    form : 'Game',
    validate
})(GameForm)