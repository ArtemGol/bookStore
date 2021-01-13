import React from "react"

export const Alert = () => {
    return (
        <div className="ui success message">
            <i className="close icon"></i>
            <div className="header">
                Your user registration was successful.
            </div>
            <p>You may now log-in with the username you have chosen</p>
        </div>
    )
}