import React from 'react'
import classNames from 'classnames';
import './section.css';

const Section = ({ children, cName }) => (
    <div className={classNames(['raised-2','section', cName])}>
        { children }
    </div>
)
export default Section;