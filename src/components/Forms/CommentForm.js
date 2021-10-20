import React from 'react'
import { Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';


const CommentForm = (props) => {

    return (
        <Form onSubmit={props.handleSubmit}>
            <div className='comment-box'>
                <div>
                    <Field name='yourName' component={"input"} placeholder='your name'/>
                </div>
                <div>
                    <Field name='yourComment' component={"textarea"} placeholder='your name'/>
                </div>
                <div>
                    <button type={'submit'}>submit</button>
                </div>
            </div>
        </Form>
    )
}

export const CommentFormRedux = reduxForm({
    form: 'comment'
}) (CommentForm)





