import React, { Component } from 'react'

export default class CardProduct extends Component {
    render() {
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src="https://picsum.photos/180/180" alt="123  " />
                    <div className="card-body">
                        <h4 className="card-title">React Learning</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}
