import React from 'react'
import { Section } from '../'
import './settingCard.css';

const SettingCard = (props) => (    
    <Section>
        <div className='setting-card' 
            onClick={()=> props.onClick(props.url)}
        >
         {props.title}
        </div>
    </Section>    
)
export default SettingCard;