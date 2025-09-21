import next from 'next';
import React, { cache } from 'react'
import { getOrigin } from './_util/setting';
export const revalidate = 60; // In seconds
//Call api
//Viết server action
//Sử dụng api Route để tạo api riêng 
/*
  Sau này backend gốc có thay đổi dữ liệu ta chỉ sửa trong lớp api route mà không phải đi sửa từng code trên giao diện component
*/


import { Metadata } from "next";

// ✅ Metadata cho Server Component
export const metadata: Metadata = {
  title: "Shoes App – Latest Shoe Collection",
  description:
    "Discover the latest collection of shoes in our Shoes App. Find detailed descriptions and reviews for all products.",

  // Open Graph (Facebook, Zalo, LinkedIn…)
  openGraph: {
    title: "Shoes App – Latest Shoe Collection",
    description:
      "Discover and shop the latest shoes collection with detailed reviews.",
    url: "https://bc84-nextjs-ts-vjf5.vercel.app/",
    siteName: "Cybersoft Shoes App",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/converse-chuck-taylor.png", // Thay bằng link ảnh thật
        width: 800,
        height: 600,
        alt: "Latest Shoes Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Shoes App – Latest Shoe Collection",
    description:
      "Discover and shop the latest shoes collection with detailed reviews.",
    images: [
      "https://apistore.cybersoft.edu.vn/images/van-old-school.png", // Thay bằng link ảnh thật
    ],
    creator: "@yourtwitter", // optional
  },

  // JSON-LD Schema.org
  other: {
    "script:type=application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Shoes App – Latest Shoe Collection",
      description: "Discover and shop the latest collection of shoes.",
      url: "https://yourdomain.com",
    }),
  },
};
const getAllProducts = async (): Promise<any[]> => {

    const host = await getOrigin();

    const res = await fetch(`${host}/api/store_app/product`);
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