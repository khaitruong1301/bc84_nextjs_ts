'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}

const SearchControl = (props: Props) => {
    const [keywordValue, setKeywordValue] = React.useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //gửi dữ liệu đến server nextjs
        router.push(`/search?keyword=${keywordValue}`);
        
        // window.location.href = `/search?keyword=${keywordValue}`; //cách 2: load lại trang (không khuyến khích sử dụng)

    }



    console.log(keywordValue);
    return (
        <div>
            <h1>Search Page - {keywordValue}</h1>
            <form className='input-group mb-3' onSubmit={handleSearch}>
                <input type="text" className='form-control' value={keywordValue} onChange={(e) => setKeywordValue(e.target.value)} />
                <button type='submit' className='btn btn-success'>Search</button>
            </form>
        </div>
    )
}

export default SearchControl