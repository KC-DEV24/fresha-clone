'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'


const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`header ${isScrolled ? 'active' : ''}`}>
            <div className="container">
                <nav className="navbar">
                    <a href="/" className="navbar-brand">
                        <Image src={'/img/logo.svg'} width={92} height={21} alt='logo-img' />
                    </a>
                    <div className="d-flex align-items-center gap-2">
                        <ul className="menu d-none d-lg-flex">
                            <li>
                                <Link href={"/"}>For Business Owners</Link>
                            </li>
                            <li><Link href={"/"}>Login</Link></li>
                        </ul>
                        <div className="position-relative">
                            <button onClick={() => setMenuToggle(!menuToggle)} className={`${menuToggle ? "active" : ""} menu-toggler`} id='menu_toggler' href={"/"}>
                                Menu
                                <div className="icon-wrapper">
                                    <Image src={"/img/icons/hamburger.webp"} width={24} height={15} alt='hamburger-img' />
                                </div>
                            </button>
                            <div className={`${menuToggle ? "d-block" : "d-none"} submenu`}>
                                <span className="d-block fw-bold">John Doe</span>
                                <ul>
                                    <li><Link href={'/'}>Profile</Link></li>
                                    <li><Link href={'/'}>Contact</Link></li>
                                    <li><Link href={'/'}>About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header