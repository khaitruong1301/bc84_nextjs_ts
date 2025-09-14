import { NextRequest, NextResponse } from 'next/server'
//Giã lập dữ liệu database
//Module-level cache
//Lần đầu tiên sẽ mất 5s để load dữ liệu, những lần sau sẽ trả về ngay lập tức
//Trong thực tế, bạn có thể dùng Redis hoặc Memcached để làm cache
let cachedProducts: any[] | null = [
    { id: 1, name: 'Iphone 14 Pro Max' },
    { id: 2, name: 'Samsung Galaxy S23 Ultra' },
    { id: 3, name: 'Xiaomi Mi 13 Pro' },
];

export async function GET(_request: NextRequest) {
    // Nếu cache chưa có thì mô phỏng chậm 5s, sau đó lưu vào module-level cache
    if (!cachedProducts) {
        // Đợi 5 giây lần đầu tiên
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
    // Lần gọi sau sẽ trả về cachedProducts ngay lập tức
    return NextResponse.json(cachedProducts);
}

export async function POST(request: NextRequest) {
    const body = await request.json(); //Lấy ra phần body raw json của request
    console.log(body);
    cachedProducts?.push(body);
    return NextResponse.json("Ok thêm thành công");
}


export async function DELETE(request: NextRequest) {
    // Lấy id từ request.url
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    let indexDel:any  = cachedProducts?.findIndex(p => p.id.toString() === id);
    if (indexDel!= -1) {
        cachedProducts?.splice(indexDel, 1);
    }else {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(cachedProducts);
}