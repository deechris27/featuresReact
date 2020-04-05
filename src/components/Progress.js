import React from 'react'

export const Progress = ({percentage}) => {
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-stripped bg-success" style={{width: `${percentage}`}}></div>
            {percentage}%
        </div>
    )
}