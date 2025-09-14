'use client'
//Call api từ phía client (máy người dùng)
import React, { useEffect } from 'react'

type Props = {}

const page = (props: Props) => {

    const [arrProduct,setArrProduct] = React.useState([]);
    const getAllProducts = async () => {
        const res = await fetch('/api/product_cache');
        const data = await res.json();
        setArrProduct(data);
    }
    useEffect(() => {
        getAllProducts();
    }, []);

  return (
    <div className='container'>
        <h1>Danh sách sản phẩm</h1>
        <div className='row'>
            {arrProduct.map((product:any) => {
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