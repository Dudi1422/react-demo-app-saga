import React from 'react'
import FontAwesome from 'react-fontawesome'
import './loadingButton.css'

const LoadingButton = ({ title, isLoading, propStyle, onClick, disabled }) => (
    <button 
        disabled={disabled || isLoading} 
        style={(disabled || isLoading) ? { ...style, opacity: '0.7',  ...propStyle} : {...style, ...propStyle}}
        onClick={onClick}
    >
        {isLoading ?
            <span><FontAwesome
                name="fas fa-spinner"
                spin
            /> </span>
            :
            ''
        }
        {title}
    </button>

)
export default LoadingButton;

const style =
    {
        backgroundColor: '#795548',
        color: 'white',
        width: '270px',
        height: '34px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    }
