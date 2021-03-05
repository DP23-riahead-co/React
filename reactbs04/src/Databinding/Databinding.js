import React, { Component } from 'react'

export default class Databinding extends Component {

    sinhVien = {
        ma: 1,
        ten: 'abc',
        renderSinhVien = () => {
            let sinhVien = {
                ma: 1,
                
                ten: 'abcd',
                hinhanh: "https://picsum.photos/100/100"
            };

            return <div className="card text-left">
                < img className="card-img-top" src={sinhVien.hinhanh} alt={sinhvien.hinhanh} />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>

        }


    }



    render() {
        let name = 'Cyber';
        let product = {
            id: 1,
            name: 'Iphone X',
            price: 100,
            img: 'https://picsum.photos/100/100',
        }
        let renderProduct = () => {
            // Khi nội dung return là component thì phải được bao phủ bới 1 thẻ
            return <div>
                <p>{product.price}</p>
            </div>
        }

        return (
            <div>
                <ul>
                    <li>Ma so sinh vien: {this.sinhVien.ma}</li>
                    <li>Ten sinh vien: {this.sinhVien.ten}</li>
                </ul>
                <p id='title'>
                    {name}
                </p>
                <br />
                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">fsdfd</p>
                    </div>
                </div>

                {renderProduct()}
                {this.renderSinhVien}
            </div>


        )
    }
}
