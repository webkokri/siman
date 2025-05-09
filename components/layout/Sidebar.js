/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                           
                            <div className="content">
                                <h6 className="user-name">
                                    
                                </h6>
                                <p className="font-xs text-muted">
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "home active" : "home"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"></span>
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "about active" : "about"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"></span>

                                            <Link href="/about" legacyBehavior><a>About</a></Link>
                                            </li>

                                            <li className={isActive.key == 3 ? "services active" : "services"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"></span>

                                            <Link href="/services" legacyBehavior><a>Services</a></Link>
                                             </li>

                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="" onClick={() => handleToggle(4)} legacyBehavior><a>Products</a></Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
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
                                        
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"></span>

                                            <Link href="/portfolio" legacyBehavior><a>Portfolio</a></Link>
                                            </li>
                                       
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Support</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/faq" legacyBehavior><a>Faq</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us" legacyBehavior><a>Contact Us</a></Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400 text-center">
                                Copyright 2024 © Siman Infotech<br />All Rights Reserved.<br/>
                                <i>We are a sister concern of Kokri Web Solutions.</i>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;