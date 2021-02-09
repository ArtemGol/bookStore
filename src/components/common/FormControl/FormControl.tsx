import React, {FC} from "react"
import styles from "./FormControl.module.css"
import {Field} from "redux-form"
import errorImg from "../../../accets/error.png"
import {Checkbox, Input} from "semantic-ui-react"
import {FieldValidatorType} from "../../../utils/Validators"

type ComponentsParamsType = {
    input: any
    meta: {
        touched?: boolean
        error?: string
    }
    placeholder?: any,
    props: any
}

export const Textarea: FC<ComponentsParamsType> = ({input, meta: {touched, error}, placeholder, ...props}) => {

    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {hasError && <div title={error}><img className={styles.textAreaImg} src={errorImg} alt=""/></div>}
            <div>
                <textarea {...input} {...props} placeholder={hasError ? error : placeholder}/>
            </div>

        </div>
    )
}

export const InputComponent: FC<ComponentsParamsType> = ({
                                                             input,
                                                             meta: {touched, error},
                                                             placeholder,
                                                             ...props
                                                         }) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {hasError && <div title={error}><img className={styles.inputImg} src={errorImg} alt=""/></div>}
            {hasError
                ? <Input error {...input} {...props} placeholder={hasError ? error : placeholder}/>
                : <Input {...input} {...props} placeholder={hasError ? error : placeholder}/>
            }
        </div>

    )
}

export const InputCheckBox: FC<ComponentsParamsType> = ({input, ...props}) => {
    return (
        <>
            <Checkbox {...input} {...props}/>
        </>
    )
}

export const createField = (placeholder: string,
                            name: string,
                            validators: Array<FieldValidatorType>,
                            component: FC<ComponentsParamsType>,
                            props = {},
                            text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}/> {text}
    </div>
)
