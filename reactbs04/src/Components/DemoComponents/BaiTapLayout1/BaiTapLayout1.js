import React, { Component } from 'react'
import BT1Component from './BT1Component'
import BT1Header from './BT1Header'
import FooterComponent from './FooterComponent'
import ProductComponent from './ProductComponent'
import ProductListComponents from './ProductListComponents'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className='bg-dark container-fluid'>
                <BT1Header></BT1Header>
                <BT1Component></BT1Component>
                <ProductComponent></ProductComponent>
                <ProductListComponents></ProductListComponents>
                <FooterComponent></FooterComponent> 
            </div>
        )
    }
}
