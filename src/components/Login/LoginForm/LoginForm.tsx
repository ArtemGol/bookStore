import {maxLengthCreator, required} from "../../../utils/Validators"
import {useHistory} from "react-router"
import {Button, Form, Message, Segment} from "semantic-ui-react"
import styles from "../Login.module.css"
import {createField, InputCheckBox, InputComponent} from "../../common/FormControl/FormControl"
import {InjectedFormProps, reduxForm} from "redux-form"
import {FC} from "react"
import {LoginFormValuesType} from "../Login"

const maxLength50 = maxLengthCreator(50)

type LoginFormOwnProps = {
    //here can be the ownProps of component
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({error, handleSubmit}) => {

    const history = useHistory()

    const onGoBack = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <Segment compact className={styles.loginForm}>
            <div className={styles.message}>
                enter 'eve.holt@reqres.in' <br/>
                and any password
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    {createField('Email...', "email", [required, maxLength50], InputComponent, {type: "text"})}
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    {createField('Password', "password", [required, maxLength50], InputComponent, {type: "password"})}
                </Form.Field>
                <Form.Field>
                    <label>Remember me</label>
                    {createField('', "remember", [], InputCheckBox, '')}
                </Form.Field>
                {error &&
                    <Message
                        error
                        header='Warning'
                        content={error}
                    />
                }
                <Button type='submit'>Enter</Button>
                <Button onClick={onGoBack} floated={'right'}>Back</Button>
            </Form>
        </Segment>
    )
}

export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'loginForm', initialValues: {}
})(LoginForm)