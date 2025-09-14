import { NextRequest,NextResponse } from "next/server";
//Trong 1 file api route, chỉ có thể tạo 1 request method : GET, POST, PUT, DELETE, PATCH
export async function GET(request:NextRequest){
    const products = [
        {id:1,name:'Iphone 14 Pro Max'},
        {id:2,name:'Samsung Galaxy S23 Ultra'},
        {id:3,name:'Xiaomi Mi 13 Pro'},
    ];

    return NextResponse.json(products);
}