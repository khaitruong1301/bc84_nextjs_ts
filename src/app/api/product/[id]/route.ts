//cài prisma hoặc firebase ... 
import { NextRequest,NextResponse } from "next/server";


export async function GET(request:NextRequest){
    console.log(request);
    //Lấy ra id từ request
    const id = request.url.split('/')[request.url.split('/').length -1];
    const products = [
        {id:1,name:'Iphone 14 Pro Max'},
        {id:2,name:'Samsung Galaxy S23 Ultra'},
        {id:3,name:'Xiaomi Mi 13 Pro'},
    ];
    const product = products.find(p=>p.id.toString() === id);
    if(product){
        return NextResponse.json(product);
    }   
    return NextResponse.json({message:'Product not found'}, {status:404});
}