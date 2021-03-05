import React from 'react'

export default function DemoFunction() {
    // đối với function component bên dưới lệnh return sẽ là giao diện của thẻ <Demofunction>
    //lưu ý nội dung của thẻ phải được bao phủ với 1 thẻ
    return (
        <div>
            <p className="p-2 bg-dark text-light">hello</p>
            <p className=" text-light">hi</p>
        </div>
    )
}
