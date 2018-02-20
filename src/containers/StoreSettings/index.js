import React, { Component } from 'react'

import {   
    SingleInput,    
    FromToTimeInput,    
} from '../../components/';
import './storeSettings.css'

class StoreSettings extends Component {
    constructor(props) {
        super(props)        
        this.handleStoreNameChange = this.handleStoreNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStoreAddressChange = this.handleStoreAddressChange.bind(this);
        this.handleStorePhoneChange = this.handleStorePhoneChange.bind(this);
        this.updateStoreSettings = this.updateStoreSettings.bind(this);
    }

    updateStoreSettings(newData){        
        const storeSettings = {...this.props.storeSettings, ...newData};    
        this.props.updateStoreSettings(storeSettings);
    }
    handleStoreNameChange(e) {        
        this.updateStoreSettings({storeName: e.target.value})        
    }
    handleEmailChange(e) {                
        this.updateStoreSettings({email: e.target.value})       
    }
    handleStoreAddressChange(e) {        
        this.updateStoreSettings({storeAddress: e.target.value})       
    }
    handleStorePhoneChange(e) {        
        this.updateStoreSettings({storePhone: e.target.value})       
    }

    

    render() {        
        return (
            <div className="flex-one-center">
                <SingleInput style={{ marginBottom: '30px' }}
                    placeholder="Store Name"
                    value={this.props.storeSettings.storeName}
                    onChange={this.handleStoreNameChange}
                />                
                <SingleInput style={{ marginBottom: '30px' }}
                    placeholder="Store Email"
                    value={this.props.storeSettings.email}
                    onChange={this.handleEmailChange}
                />
                <SingleInput style={{ marginBottom: '30px' }}
                    placeholder="Store Address"
                    value={this.props.storeSettings.storeAddress}
                    onChange={this.handleStoreAddressChange}
                />
                <SingleInput style={{ marginBottom: '30px' }}
                    placeholder="Store Phone"
                    value={this.props.storeSettings.storePhone} type="tel"
                    onChange={this.handleStorePhoneChange}
                />
                <div></div>
                <FromToTimeInput
                    title="Store Opening Hours"
                />
            </div>
        )
    }
}

export default StoreSettings;