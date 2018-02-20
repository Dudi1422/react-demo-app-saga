import React from 'react'
import './body.css';
const Body = ({ children }) => (
    <div className="main hbox space-between">        
        {children}
    </div>
)
export default Body;