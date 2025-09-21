import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    try {
        
        const id = req.nextUrl.searchParams.get('id') || '';
        console.log('id',id);
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