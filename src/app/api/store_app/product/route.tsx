import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    try {
        const res = await fetch('https://apistore.cybersoft.edu.vn/api/Product');
        const data = await res.json();
        const content =  data.content;
        return NextResponse.json({message:'success',content});
    } catch (error) {
        console.error('Error fetching product data:', error);
        return NextResponse.json({ error: 'Failed to fetch product data' }, { status: 500 });
    }

}