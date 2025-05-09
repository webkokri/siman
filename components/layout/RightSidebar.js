/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const RightSidebar = ({ openClass }) => {
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
                    
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand">
                                                <i className="fi-rr-angle-small-down"></i></span>
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                            <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/" legacyBehavior><a>Homepage - 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-2" legacyBehavior><a>Homepage - 2</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-3" legacyBehavior><a>Homepage - 3</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-4" legacyBehavior><a>Homepage - 4</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-about-1" legacyBehavior><a>About</a></Link>
                                            <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-about-1" legacyBehavior><a>About Us - 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-2" legacyBehavior><a>About Us - 2</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-3" legacyBehavior><a>About Us - 3</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-service-1" legacyBehavior><a>Company</a></Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="/page-service-1" legacyBehavior><a className="closer">Services - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-service-2" legacyBehavior><a className="closer">Services - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-pricing-1" legacyBehavior><a className="closer">Pricing - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2" legacyBehavior><a className="closer">Pricing - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-faqs-1" legacyBehavior><a className="closer">FAQs - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-faqs-2" legacyBehavior><a className="closer">FAQs - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-career" legacyBehavior><a className="closer">Career</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-career-detail" legacyBehavior><a className="closer">Career Detail</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/#" legacyBehavior><a>Pages</a></Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="/page-contact" legacyBehavior><a>Contact</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-signup" legacyBehavior><a>Sign Up</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login" legacyBehavior><a>Log In</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-reset" legacyBehavior><a>Reset Password</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/404" legacyBehavior><a>Error 404</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/blog-1" legacyBehavior><a>Blog</a></Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="/blog-1" legacyBehavior><a className="closer">Blog 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-2" legacyBehavior><a className="closer">Blog 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/blog-single" legacyBehavior><a>Blog Single</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/page-contact" legacyBehavior><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>My Boosted Shots</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>My Collections</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-login" legacyBehavior><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © Agon - Agency Template.<br />Designed
                                by
                                <Link href="http://alithemes.com" legacyBehavior><a>&nbsp; AliThemes</a></Link>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default RightSidebar;