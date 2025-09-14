//tsrafce
"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Header = (props: Props) => {

    const pathName = usePathname();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" href="/">
            <Image src="https://cybersoft.edu.vn/wp-content/uploads/2025/03/logo-cybersoft-new-2.png" alt="Logo" width={100} height={100} style={{width:'100px', height:'auto'}} crossOrigin="anonymous" quality={100} />
            </Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className={pathName === '/' ? 'nav-link active bg-white text-dark' : 'nav-link'} href="/" aria-current="page">Home <span className="visually-hidden"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={pathName === '/login' ? 'nav-link active bg-white text-dark' : 'nav-link'} href="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={pathName === '/register' ? 'nav-link active bg-white text-dark' : 'nav-link'} href="/register">Register</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>


    )
}

export default Header