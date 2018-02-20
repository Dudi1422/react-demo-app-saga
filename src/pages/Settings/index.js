import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {
    Layout,
    SettingCard
} from '../../components/';
import './settings.css'

import $ from "jquery";
import resizeLogger from '../../services/logger'

const settingCards = [{ title: 'Products Settings', url: '/products-settings' }, { title: 'Payments Settings', url: '/payment-settings' },
{ title: 'General Settings', url: '/general-settings' }, { title: 'Store Settings', url: '/store-settings' }]
class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.email = 'dudi seting'
    }

    componentDidMount() {
        console.log('componentDidMount Settings page')
        // $(window).off("resize", resizeLogger.bind(this));        
    }

    handleCardClick = (url) => {
        this.props.history.push(url);
    }

    render() {
        return (
            <Layout
            // subHeader={<div> Hellow </div>}
            >
                <div className='settings-container'>
                    {
                        settingCards.map(card => (
                            <SettingCard key={card.title} title={card.title} url={card.url} onClick={this.handleCardClick} />
                        ))
                    }                    
                </div>
            </Layout>
        )
    }
}
export default withRouter(Settings);