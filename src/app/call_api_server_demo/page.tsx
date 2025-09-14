//tsrafce
import React from 'react'

//server action: Hàm trên máy server
const getAllProducts = async (): Promise<any[]> => {
    const res = await fetch('http://localhost:3000/api/product_cache');
    const data = await res.json();
    return data;
}

type Props = {}

const page = async (props: Props) => {
    //gọi server action tại đây để lấy dữ liệu
    const arrProduct = await getAllProducts();

    return (
        <div className='container'>
            <h1>Danh sách sản phẩm</h1>
            <div className='row'>
                {arrProduct.map((product: any) => {
                    return <div className='col-4' key={product.id}>
                        <div className='card'>
                            <img src={'https://picsum.photos/id/200/200'} alt={product.name} className='card-img-top' />
                            <div className='card-body'>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default page