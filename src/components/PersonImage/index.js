import React from 'react'
import './personImage.css';

const PersonImage = ({ url }) => (
    <img className='person-image' src={url} alt="" />
)
export default PersonImage;