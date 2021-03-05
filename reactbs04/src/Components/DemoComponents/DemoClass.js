
import React, { Component } from 'react'

export default class DemoClass extends Component {
    render() {
         // phương thức render sẽ tự kích hoạt khi mình sử dụng thẻ component
        return (
            <div>
                 <div className='container'>
            <p className='display-4 pt-2'>Tittle</p>
            <p>Content</p>
             </div>
            </div>
        )
    }
}
