import React, { Component } from 'react'
import {
    Layout
} from '../../components/';

class ProductsSettings extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    

    render() {
        return (
            <Layout
            // subHeader={<div> Hellow </div>}
            >
                <div>
                    Products Settings                  
                </div>
            </Layout>
        )
    }
}
export default ProductsSettings;