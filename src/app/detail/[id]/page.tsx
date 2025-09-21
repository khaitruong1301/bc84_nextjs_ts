import { getOrigin } from '@/app/_util/setting';
import { Metadata } from 'next';
import React from 'react'




const getProductDetailById = async (id: string) => {
    if (!id) return null;
    const host = await getOrigin();
    console.log(host)
    const res = await fetch(`${host}/api/store_app/product?id=${id}`);
    const data = await res.json();
    return data.content;
}

// Hàm generateMetadata chạy server-side trước khi render
export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const product = await getProductDetailById(params.id);

    if (!product) {
        return {
            title: "Product Not Found | Cybersoft Shoes",
            description: "The product you are looking for does not exist.",
        };
    }

    return {
        title: `${product.name} – Cybersoft Shoes`,
        description: product.description,
        openGraph: {
            title: `${product.name} – Cybersoft Shoes`,
            description: `${product.description}`,
            url: process.env.SITE_URL || `https://bc84-nextjs-ts-vjf5.vercel.app/detail/${params.id}` || `http://www.cybersoftnextjs.online/detail/${params.id}`,
            siteName: `${product.name} – Cybersoft Shoes`,
            images: [
                {
                    url: `${process.env.SITE_URL || `${product.image}`}`,
                    width: 1200,
                    height: 630,
                    alt: `${product.name} – Cybersoft Shoes`,
                },
            ],
            locale: "vi_VN",
            type: "website",
        },


        twitter: {
            card: "summary_large_image",
            title: `${product.name} – Cybersoft Shoes`,
            description: product.description,
            images: [product.image],
        },

        // JSON-LD schema cho SEO
        other: {
            "script:type=application/ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.name,
                description: product.description,
                image: product.image,
                url: `https://yourdomain.com/products/${params.id}`,
                offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: product.price,
                    availability: "https://schema.org/InStock",
                },
            }),
        },
    };
}

// app/store_app/product/[id]/page.tsx
type Params = { id: string };

export default async function Page({
    params,
}: {
    params: Promise<Params>; // ← Quan trọng: params là Promise
}) {
    const { id } = await params; // ← Phải await
    const product = await getProductDetailById(id);


    // ... dùng id để fetch dữ liệu, render, v.v.
    return <div>
        <div className="container py-5">
            <div className="row">
                {/* Left thumbnails */}
                <div className="col-md-3 d-none d-md-block">
                    <div className="list-group">
                        <img
                            src={product?.image ?? '/placeholder.png'}
                            className="img-fluid mb-3 border rounded"
                            alt={product?.name ?? 'product'}
                            width={50}
                        />
                        <img
                            src={product?.image ?? '/placeholder.png'}
                            className="img-fluid mb-3 border rounded"
                            alt={product?.name ?? 'product'}
                            width={50}

                        />
                        <img
                            src={product?.image ?? '/placeholder.png'}
                            className="img-fluid mb-3 border rounded"
                            alt={product?.name ?? 'product'}
                            width={50}

                        />
                        <img
                            src={product?.image ?? '/placeholder.png'}
                            className="img-fluid mb-3 border rounded"
                            alt={product?.name ?? 'product'}
                            width={50}

                        />
                    </div>
                </div>

                {/* Main image */}
                <div className="col-md-6">
                    <div className="card border-0">
                        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: 400, background: '#f8f9fa' }}>
                            <img
                                src={product?.images?.[0] ?? '/placeholder.png'}
                                className="img-fluid"
                                alt={product?.name ?? 'product'}
                                style={{ maxHeight: 360, objectFit: 'contain' }}
                            />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <button className="btn btn-link text-dark">&lt;</button>
                            <button className="btn btn-link text-dark">&gt;</button>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="col-md-3">
                    <h2 className="fw-bold mb-2">{product?.name ?? 'VANS BLACK'}</h2>
                    <p className="text-muted small">{product?.shortDescription ?? 'about this shoe: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>

                    <div className="mb-3">
                        <div className="h4 text-dark">{product?.price ? `$${product.price}` : '200$'}</div>
                    </div>

                    {/* Color swatches */}
                    <div className="mb-3">
                        <label className="form-label d-block">Color</label>
                        <div className="d-flex gap-2">
                            <button className="btn p-2 border" style={{ background: '#ff2d55', width: 44, height: 44 }} aria-label="Red"></button>
                            <button className="btn p-2 border" style={{ background: '#2ee6a8', width: 44, height: 44 }} aria-label="Green"></button>
                            <button className="btn p-2 border" style={{ background: '#31f0f0', width: 44, height: 44 }} aria-label="Cyan"></button>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <label className="form-label mb-0">Select Size</label>
                            <a href="#" className="small">Size Guide</a>
                        </div>
                        <div className="mt-2 d-flex flex-wrap gap-2">
                            <button className="btn btn-outline-secondary">EU 32</button>
                            <button className="btn btn-outline-secondary">EU 33</button>
                            <button className="btn btn-outline-secondary">EU 34</button>
                            <button className="btn btn-outline-secondary">EU 35</button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mb-3">
                        <button className="btn btn-dark w-100 mb-2">Add to Bag</button>
                        <button className="btn btn-outline-secondary w-100">Favourite ♡</button>
                    </div>

                    {/* Description & details */}
                    <div className="mt-4">
                        <p className="small text-muted">
                            {product?.longDescription ?? 'Comfortable, durable and timeless—this number one for a reason.'}
                        </p>
                        <ul className="small">
                            <li>Colour Shown: {product?.color ?? 'White/Metallic Gold/Black'}</li>
                            <li>Style: {product?.style ?? 'IB6543-101'}</li>
                            <li>Country/Region of Origin: {product?.origin ?? 'China'}</li>
                        </ul>
                        <a href="#" className="small">View Product Details</a>
                    </div>

                    <hr />

                    <div className="small">
                        <div className="fw-bold">Free Delivery and Returns</div>
                        <div className="mt-2">Reviews (0) ★★★★★</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


