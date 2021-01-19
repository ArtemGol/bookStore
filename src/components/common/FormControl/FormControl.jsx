import React from "react"
import styles from "./FormControl.module.css"
import {Field} from "redux-form"
import errorImg from "../../../accets/error.png"
import {Input} from "semantic-ui-react";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {hasError && <div title={error}><img className={styles.textAreaImg} src={errorImg} alt=""/></div>}
            <div>
                <textarea {...input} {...props} placeholder={hasError ? error : props.placeholder}/>
            </div>

        </div>
    )
}

export const InputComponent = ({input, meta, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {hasError && <div title={error}><img className={styles.inputImg} src={errorImg} alt=""/></div>}
            <div>
                {hasError
                    ? <Input error {...input} {...props} placeholder={hasError ? error : props.placeholder}/>
                    : <Input {...input} {...props} placeholder={hasError ? error : props.placeholder}/>
                }
            </div>

        </div>

    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}/> {text}
    </div>
)
