import next from 'next';
import React, { cache } from 'react'
export const revalidate = 60; // In seconds
//Call api
//Viết server action
//Sử dụng api Route để tạo api riêng 
/*
  Sau này backend gốc có thay đổi dữ liệu ta chỉ sửa trong lớp api route mà không phải đi sửa từng code trên giao diện component
*/
const getAllProducts = async (): Promise<any[]> => {
    const res = await fetch('http://localhost:3000/api/store_app/product');
    const data = await res.json();
    return data;
}

//Gọi trực tiếp api từ server gốc 
/*
  + Ưu điểm: Không phải tạo api route trung gian, tiết kiệm thời gian
  + Nhược điểm: Mỗi lần backend gốc thay đổi thì phải sửa từng chỗ gọi api trong component
*/
const getAllProductsByStoreApi = async (): Promise<any[]> => {
    const res = await fetch('http://apistore.cybersoft.edu.vn/api/Product');
    const data = await res.json();
    return data;
}
type Props = {}
const page = async(props: Props) => {
  const data:any = await getAllProductsByStoreApi();
  return (
    <div className='container'>
        <h1>Danh sách sản phẩm</h1>
        <div className='row'>
            {data.content.map((product: any) => {
                return <div className='col-4 mt-2' key={product.id}>
                    <div className='card'>
                        <img src={product.image} alt={product.name} className='card-img-top' />
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