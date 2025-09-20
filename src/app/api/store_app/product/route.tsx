import { setCookieCustom } from '@/app/_util/setting';
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from "next/headers";

const handleSetcookie = async () => {
    await setCookieCustom('test_cookie', 'hello_cookie', 7);
}


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const store = await cookies();

        // // set cookie token = abc123, tồn tại 1 giờ
        // store.set("token", "abc123", {
        //     httpOnly: true, // không đọc được từ JS client
        //     path: "/",
        //     maxAge: 60 * 60, // 1h
        // });

        // const cookie = store.get('token')?.value || '';
        // console.log(cookie, 'cookie');

        const id = req.nextUrl.searchParams.get('id') || '';
        console.log('id', id);
        const baseUrl = 'https://apistore.cybersoft.edu.vn/api';
        const fetchUrl = id
            ? `${baseUrl}/product/getbyid?id=${id}`
            : `${baseUrl}/Product`;

        const res = await fetch(fetchUrl);
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            console.error('Fetch error:', res.status, text);
            return NextResponse.json({ error: 'Failed to fetch product data' }, { status: res.status });
        }

        const data = await res.json();
        const content = data.content ?? data;
        return NextResponse.json({ message: 'success', content });
    } catch (error) {
        console.error('Error fetching product data:', error);
        return NextResponse.json({ error: 'Failed to fetch product data' }, { status: 500 });
    }
}