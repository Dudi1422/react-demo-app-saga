import React from 'react'
import './singleInput.css'
const SingleInput = (props) => (
    <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        id={props.id}
        required={props.required}
        disabled={props.disabled}
        style={{...style, ...props.style}}
    />
)
export default SingleInput;

const style = {
    width: '270px',
    height: '30px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',    
    backgroundColor: '#fdf5e6',
    borderColor: 'silver'
}
