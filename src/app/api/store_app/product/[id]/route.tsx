import { NextRequest, NextResponse } from "next/server";
type Params = { params: { id: string } };
export async function GET(req: NextRequest, reqParam: Params) {
    try {
        const {params} = reqParam;
        if (!params.id || !params) {
            return NextResponse.json({ message: 'Không có id' }, { status: 400 });
        }
        // console.log('params',params);
        const res = await fetch(`http://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${params.id}`);
        const data = await res.json();
        const content = data.content;
        return NextResponse.json({ message: 'success', content });
    } catch (error) {
        console.error('Error fetching product data:', error);
        return NextResponse.json({ error: 'Failed to fetch product data' }, { status: 500 });
    }
}

