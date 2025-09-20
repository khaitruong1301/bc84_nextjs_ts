import Link from 'next/link';
import React from 'react'
import SearchControl from './SearchControl';

type Props = {
  searchParams: Promise<{ keyword: string }>; // ← Quan trọng: params là Promise
}

const fetchData = async (keyword: string) => {
  const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`);
  const data = await res.json();
  return data;
}

const page = async (props: Props) => {
  const { keyword } = await props.searchParams;
  const data = await fetchData(keyword);


  return (
    <div className='container'>
     
      <SearchControl />


      <div className='row'>
        {data.content.map((item: any) => (
          <div className='col-4 mt-2' key={item.id}>
            <div className='card'>
              <img src={item.image} alt={item.name} />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Link href={`/detail/${item.id}`} className='btn btn-primary'>View Detail</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page