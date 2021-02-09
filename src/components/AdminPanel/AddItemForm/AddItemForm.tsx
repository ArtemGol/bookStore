import React, {FC} from 'react'
import {Button, Form, Segment} from "semantic-ui-react"
import {InjectedFormProps, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../utils/Validators"
import {createField, InputComponent} from "../../common/FormControl/FormControl"
import {useHistory} from "react-router"
import {useDispatch} from "react-redux"
import {setItem} from "../../../redux/actions/admin"
import {ItemType} from "../../../Types/types"
import {AdminFormValuesType} from "../AdminPanel"

const maxLength500 = maxLengthCreator(500)

type AdminFormOwnProps = {
    item: ItemType | null
}

const AddItemForm: FC<InjectedFormProps<AdminFormValuesType, AdminFormOwnProps> & AdminFormOwnProps> =
    ({handleSubmit, item}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onGoBack = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        history.goBack()
        item && dispatch(setItem(null))
    }

    return (
        <Segment attached='bottom'>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    {createField('Full book title', "title", [required, maxLength500], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Author</label>
                    {createField('Full name of author', "author", [required, maxLength500], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Image</label>
                    {createField('Link to the image...', "image", [required, maxLength500], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    {createField('Price...', "price", [required, maxLength500], InputComponent, {type: "text"})}
                </Form.Field>
                <Button type='submit'>Save</Button>
                <Button onClick={onGoBack}>Back to store</Button>
            </Form>
        </Segment>
    )
}

export const AddItemReduxForm: any = reduxForm<AdminFormValuesType, AdminFormOwnProps>({
    form: 'AddItem', initialValues: {}
})(AddItemForm)