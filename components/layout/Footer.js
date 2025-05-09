/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
//import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";

const Footer = () => {
    return (
        <>

        
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="https://siman.ca" legacyBehavior>
                                    <a>
                                        {/* <img alt="Agon" src="/assets/imgs/template/logo.svg" /> */}
                                        <ExportedImage src="/assets/imgs/template/logo.svg" alt="Agon" width={162} height={42}/>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to discuss a project?</span>
                                <Link href="/contact-us" legacyBehavior>
                                    <a className="btn btn-square">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="text-body-text color-gray-600 mb-5">162, Heartstone Dr, Winnipeg, Manitoba, Canada</div>
                            <div className="text-body-text color-gray-600">info@siman.ca</div>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                
                                <li>
                                    <Link href="/team" legacyBehavior>
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career" legacyBehavior>
                                        <a>Careers</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="https://siman.ca/training.php" legacyBehavior>
                                        <a>Industrial Training</a>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link href="/about" legacyBehavior>
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/faq" legacyBehavior>
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link href="/contact-us" legacyBehavior>
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/privacy" legacyBehavior>
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tos" legacyBehavior>
                                        <a>Term & Condtions</a>
                                    </Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© Siman Infotech 2024</span>
                                
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com/kokriweb" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com/kokriweb" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com/kokriweb" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/kokriweb" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 footernotice text-center">
                            <Link href="https://kokriweb.in/" legacyBehavior>
                                    <a className="text-body-text color-gray-500 ml-50">We are a sister concern of Kokri Web Solutions.</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    );
};

export default Footer;