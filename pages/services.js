/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";


function Service2() {
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2">We provide expert guidance,<span className="color-green-900"> innovative solutions</span><br className="d-lg-block d-none" /> and exceptional customer service.</h1>
                                    <div className="mt-40 text-center">
                                        <Link href="/contact-us" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Get Started</a></Link>

                                        <Link href="/about" legacyBehavior><a className="btn btn-link customBtn color-gray-900 ml-40">Why Siman?</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-none d-lg-block">
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-8">
                                            <div className="banner-imgs">
                                                <div className="block-1 shape-2"><img src="/assets/imgs/page/services/2/banner2.png" alt="Agon" /></div>
                                                <div className="block-2 shape-2"><img src="/assets/imgs/page/services/2/banner1.png" alt="Agon" /></div>
                                                <div className="block-3 shape-2"><img src="/assets/imgs/page/services/2/banner3.png" alt="Agon" /></div><img src="/assets/imgs/page/services/1/about.svg" alt="Agon" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="section-box mt-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Elevate productivity with automation, collaboration, customization, and insightful analytics.</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">We provide excellent services worldwide, offering top-notch solutions in automation, collaboration, customization, and insightful analytics to boost productivity.</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-120">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">SEO</h4>
                                    <p className="text-body-text-md color-gray-600">Our SEO services focus on improving your websites visibility in search engines, driving traffic, and increasing conversions. We offer on-page optimization, link building, and content creation.</p>
                                    <div className="box-image-inner bg-color-1"><img src="/assets/imgs/page/services/2/seo.png" alt="Search Engine Optimization" /></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">SMO</h4>
                                    <p className="text-body-text-md color-gray-600">Social Media Optimization (SMO) refers to the process of optimizing social media platforms to increase brand visibility and engage with potential customers. This involves creating and sharing high-quality, relevant content and building a strong social media presence to increase brand recognition and drive traffic to a website.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/services/2/smo.svg" alt="Social Media Optimization" /></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Digital Marketing</h4>
                                    <p className="text-body-text-md color-gray-600">Digital marketing services encompass various strategies and techniques to promote a brand online. This includes webdesign, smm, email marketing, content creation, and paid advertising.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/services/2/dm.png" alt="Digital Marketing" /></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container mt-120 mb-100">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Web Designing</h4>
                                    <p className="text-body-text-md color-gray-600">Our top rated web designing services involve the creation and development of visually appealing, user-friendly websites. This includes designing the layout, graphics, and content to ensure a seamless user experience and effective brand messaging.</p>
                                    <div className="box-image-inner bg-color-1"><img src="/assets/imgs/page/services/2/design.png" alt="Web Designing" /></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Custom Software</h4>
                                    <p className="text-body-text-md color-gray-600">Custom software development services involve the creation of unique software solutions tailored to a businesss specific requirements and needs.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/services/2/smo.svg" alt="Custom Software Development" /></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Mobile Applications</h4>
                                    <p className="text-body-text-md color-gray-600">Our mobile application development services involve building software applications that run on mobile devices such as smartphones and tablets. These apps can be created for a variety of purposes. Ex; entertainment or business etc.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/services/2/apps.png" alt="Mobile Application Development" /></div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="container mt-120 mb-10">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Radio / FM</h4>
                                    <p className="text-body-text-md color-gray-600">Our cloud based radio or FM development services provide the infrastructure and technology needed to create and broadcast radio programs over the internet. With these services, broadcasters can easily stream their content from any location, reaching audiences across the globe.</p>
                                    <div className="box-image-inner bg-color-1"><img src="/assets/imgs/page/services/2/radio.png" alt="Radio or fm development" /></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">TV Development</h4>
                                    <p className="text-body-text-md color-gray-600">Our cloud-based TV development services refer to the creation, management, and distribution of television content over the internet using cloud technology. This allows for increased flexibility, scalability, and convenience for TV development, as well as faster deployment and lower infrastructure costs. Cloud-based TV development services can include everything from storage and streaming to analytics and monetization solutions.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/services/2/tv.png" alt="tv software development" /></div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">IPTV Solutions</h4>
                                    <p className="text-body-text-md color-gray-600">We provide digital television content using an internet connection. It allows viewers to access live and on-demand TV programming through a set-top box or mobile app. We offer a broader and customized selection of channels compared to traditional cable or satellite TV.</p>
                                    <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/services/2/iptv.png" alt="IPTV Solutions" /></div>
                                </div>
                            </div>

                        </div>
                    </div>


                </section>
                
                
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    )
}

export default Service2;