import React from 'react'

export const Message = ({message}) => {
    return (
        <div>
            <h1 className="alert alert-info alert-dismissible fade show">{message}</h1>
        </div>
    )
}
