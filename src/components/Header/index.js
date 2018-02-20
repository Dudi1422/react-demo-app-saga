import React from 'react';
import './header.css';
import { PersonImage } from '../';
const Header = (props) => (
    <header className="App-header">        
        <PersonImage url={props.imageUrl} />
        <span>{props.userName}</span>  
        <span onClick={props.onLogout}>{props.userName ? ' logout': ''}</span> 
        {props.children}
    </header>
)

export default Header;