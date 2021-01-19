import React from 'react'
import {Button, Form, Segment} from "semantic-ui-react"
import {reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../../utils/Validators";
import {createField, InputComponent} from "../../../common/FormControl/FormControl";

const maxLength1000 = maxLengthCreator(1000)

const AddItemForm = ({handleSubmit}) => {

    return (
        <Segment attached='bottom'>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    {createField('Title...', "title", [required, maxLength1000], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Author</label>
                    {createField('Author...', "author", [required, maxLength1000], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    {createField('Link to the image...', "image", [required, maxLength1000], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    {createField('Price...', "price", [required, maxLength1000], InputComponent, {type: "text"})}
                </Form.Field>

                <Button type='submit'>Save</Button>
            </Form>
        </Segment>
    )
}

export default reduxForm({
    form: 'AddItem', initialValues: {}
})(AddItemForm)