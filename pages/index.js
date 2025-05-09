import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";


function Home() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };

    return (
        <>
            <Layout>
            <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7"><span className="tag-1 color-orange-900">Delivering excellence since 2011.</span>
                                    <h1 className="text-display-3 mt-30">Unparalleled Expertise. Seamless Technology, Performed with Flawless Precision!</h1>
                                    <p className="text-body-lead-large color-white-500 mt-40 pr-40">Since 2011, we craft custom-critical applications, leveraging our expertise to deliver powerful software solutions and unparalleled value. Whether a start-up or an enterprise, we are ready to drive your innovation.</p>
                                    <div className="mt-40">
                                        <Link href="/contact-us" className="btn btn-black shape-square icon-arrow-right-white">Get Started
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/about/1/banner1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-1 color-gray-900">
                                Your Technology Partner
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                As the best software firm, we bring unparalleled expertise, innovative solutions, and flawless execution to be your trusted technology partner. Experience excellence, reliability, and cutting-edge technology with us. Your success is our priority.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center mt-90">
                            <ul className="nav" role="tablist">
                                <li onClick={() => handleOnClick(1)}>
                                    <Link href="/#tab-1" className={activeIndex === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Free Consulting</Link>
                                </li>
                                <li onClick={() => handleOnClick(2)}>
                                    <Link href="/#tab-2" className={activeIndex === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Technology Solutions</Link>
                                </li>
                                <li onClick={() => handleOnClick(3)}>
                                    <Link href="/#tab-3" className={activeIndex === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Marketing Solutions</Link>
                                </li>
                                <li onClick={() => handleOnClick(4)}>
                                    <Link href="/#tab-4" className={activeIndex === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Project Management</Link>
                                </li>
                                <li onClick={() => handleOnClick(5)}>
                                    <Link href="/#tab-5" className={activeIndex === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Maintenance & Support</Link>
                                </li>
                                <li onClick={() => handleOnClick(6)}>
                                    <Link href="/#tab-6" className={activeIndex === 6 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Other Services</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-2 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                Free consulting services for your success.
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                We assess the software requirements of your business and provide essential tools to enhance operational efficiency. Our consulting services help clients evaluate various technology strategies and align their tech plans with overarching business goals. Utilizing our expertise, we offer strategic advice and advanced solutions to help businesses achieve their objectives.
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block-video icon-pattern">
                                                
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.png" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-1 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                We offer various technological solutions to support corporate growth.
                                                </h3>
                                                <div className="text-body-excerpt mt-30">
                                                <ul className="mt-20">
                                                    <li><div><i className="icon-leaf"></i>  Mobile and Web Technologies</div></li>
                                                    <li><div><i className="icon-leaf"></i> Customer Relationship Management Technologies</div></li>
                                                    <li><div><i className="icon-leaf"></i> Collaboration and Project Management Apps</div></li>
                                                    <li><div><i className="icon-leaf"></i> Cloud Storage Solutions</div></li>
                                                    <li><div><i className="icon-leaf"></i>  Web-Based Payments</div></li>
                                                    <li><div><i className="icon-leaf"></i> Technological Outsourcing</div></li>
                                                    <li><div><i className="icon-leaf"></i> E-Commerce Solutions</div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-2.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-3 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                            Comprehensive digital marketing solutions for businesses.
                                                </h3>
                                                <div className="text-body-excerpt mt-30">
                                                <ul className="mt-20">
                                                    <li><div><i className="icon-leaf"></i> Digital Marketing</div></li>
                                                    <li><div><i className="icon-leaf"></i> Search Engine Optimization</div></li>
                                                    <li><div><i className="icon-leaf"></i> Social Media Marketing</div></li>
                                                    <li><div><i className="icon-leaf"></i> Email Marketing</div></li>
                                                    <li><div><i className="icon-leaf"></i> Whatsapp/Sms/Reels Marketing</div></li>
                                                    <li><div><i className="icon-leaf"></i> Affiliate Marketing</div></li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-3.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={activeIndex === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-4 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Project Management Solutions
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                We provide expert project management services tailored to businesses, ensuring efficient execution and successful outcomes. Our comprehensive approach covers planning, coordination, and implementation, delivering projects on time and within budget.
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                               <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-4.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                Maintenance & Support
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                We offer reliable maintenance and support services to ensure your systems and applications run smoothly. From troubleshooting and updates to technical assistance, our team is dedicated to optimizing performance, enhancing security, and providing timely support for uninterrupted business operations.
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-5.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 6 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-6 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                            Diverse Range of Comprehensive Creative and Technical Services.
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                In addition to our listed services, we offer a wide range of additional solutions including manpower provision, comprehensive customer support for hardware and software, printing, graphic and logo designing, content management, audio and video broadcasting, L-band advertisement design, whiteboard animation, signage design, and installation services.
                                                </p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-6.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">
                                Our Operating Philosophy
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                Our operational philosophy forms the bedrock of our leadership and management approach, dedicated to delivering exceptional service and value to our customers.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                    Design driven
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    We prioritize a human-centric approach to designing solutions, focusing on usage patterns, human behaviors, and change adoption. Our designs are intuitive, user-friendly, and mistake-proofing driven. Through our operational experience, we have realized the critical importance of meticulous design in solving business challenges—recognizing essential requirements ensures sustainability and reliability, surpassing mere configuration and customization.
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="Ecosystem Aware" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                    Ecosystem aware
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    We strive to design and develop ecosystem-aware solutions, considering both upstream and downstream impacts.

In a rapidly evolving technology landscape, siloed and obsolete technologies are common. Our solutions are designed to be organic to their ecosystems, ensuring minimal disruption during adoption.
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" alt="Customer Centric" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                    Customer centric
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    Recognizing commitments we must uphold is crucial.

To deliver impactful solutions, we prioritize understanding business dynamics and goals. Our technology solutions reflect business and customer aspirations.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-2.png" alt="Why Choose Us?" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1">Why Choose Us?</span>
                                <h3 className="text-heading-1 mt-30">
                                What makes us the best choice?
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                We offer unparalleled expertise, exceptional service, and a commitment to exceeding your expectations with every interaction.Our approach to delivering solutions to customers is divided into the following steps:
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Listen & Understand
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Listen attentively to comprehend customers needs effectively.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Plan
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Strategic planning ensures efficient project execution.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Design
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Creative design tailored to meet client specifications.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Development
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Structured development process ensures scalable solutions.
                                        </p>
                                    </div>

                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Delivery
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Timely delivery with meticulous attention to client requirements.
                                        </p>
                                    </div>

                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Maintenance
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Proactive maintenance ensures sustained performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                        Lets Get Started
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                    Lets delve into your next business challenge together. We are eager to understand your goals and craft tailored solutions that drive success and innovation. Connect with us today for transformative strategies.
                                    </p>
                                    
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-50 text-center">
                            <Link className="btn btn-black icon-arrow-right-white" href="/contact-us">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section-box section-green mt-100">
                    
                </section>
                

                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/oRI37cOPBQQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                    ) : null}
            </Layout>

        </>
    )
}

export default Home;