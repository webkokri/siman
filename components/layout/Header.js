/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="https://siman.ca" legacyBehavior>
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="Siman Infotech" title="Siman Infotech - Custom Software Development in Canada" src="/assets/imgs/page/services/2/siman_logo_w.png" /> : <img alt="Siman Infotech" title="Siman Infotech - Custom Software Development in Canada" src="/assets/imgs/template/logo.svg" />}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="home">
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                        </li>
                                        <li className="about">
                                            <Link href="/about" legacyBehavior><a>About</a></Link>
                                        </li>
                                        
                                        <li className="services">
                                            <Link href="/services" legacyBehavior><a>Services</a></Link></li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Products</a></Link>
                                            
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/billing" legacyBehavior><a>Billing Software (Cloud)</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/crm-general" legacyBehavior><a>CRM (General)</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/crm-immigrations" legacyBehavior><a>CRM (Immigrations)</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/radio-broadcasting" legacyBehavior><a>Radio Broadcasting (Cloud)</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/tv-broadcasting" legacyBehavior><a>TV Broadcasting (Cloud)</a></Link>
                                                </li>
                                                
                                            </ul>
                                        
                                        </li>
                                        <li className="portfolio">
                                            <Link href="/portfolio" legacyBehavior><a>Portfolio</a></Link>
                                            </li>
                                        
                                        <li className="contact-us">
                                        <Link href="/contact-us" legacyBehavior><a>Contact Us</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link href="/contact-us" legacyBehavior><a className="btn btn-default hover-up icon-arrow-right">Get Started</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;