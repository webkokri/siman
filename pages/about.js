/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";

function About3() {
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
                    <div className="banner-hero bg-about-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2 color-gray-900">Our Story</h1>
                                    <p className="text-heading-4 color-gray-600 mt-40">Our goal is to provide top-notch software development services. Since 2011, we have collaborated with a diverse range of clients, addressing complex challenges, pioneering initiatives, and intricate systems through bespoke software solutions. Throughout these partnerships, we've identified a consistent and unchanging desire from clients for the highest value in our services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={openModal}>  </a>

                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/about/3/img.png" alt="Agon" /></div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Providing solutions of every kind</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">The continual demand from clients for an Experienced Architect, a Skilled Development Team, and Continuous Innovation and Support has driven Siman's client-centric approach. These elements form the tri-pillar foundation of our software development strategy.</p>
                                
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-12 pt-50 text-center"><h4>Here how we work</h4></div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-5">1. ARCHITECTURE</h4>
                                        <p className="text-body-text color-gray-600 mt-15">At Siman, we ensure successful projects with precise design and the latest technologies. New clients meet our top architect, with over 13 years of experience in software design and architecture. He assesses each project's needs and ensures the framework meets the client's specifications. This high-level engagement guarantees meticulous attention to detail, smooth delivery, and top-quality outcomes for every project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-5">2. SKILLED TEAM</h4>
                                        <p className="text-body-text color-gray-600 mt-15">The quality of a product hinges on the experience, talent, and expertise of its creators.

We prioritize hiring top talent across all departments, enabling us to deliver impactful software solutions. Our team has completed over 100 projects, blending technical expertise with business acumen and creative insight to tackle complex challenges. With over 1 million development hours logged, our solutions are both professional and innovative.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-5">3. INNOVATION</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We build lasting relationships with our clients through ongoing support.

Our dedicated team knows each client and project intimately, ensuring a deep understanding of future software needs. Using an agile approach, we deliver unmatched service and continuously seek to enhance client software with the latest technologies. Future needs and changes are handled by the same dedicated team, ensuring efficiency and innovation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-5">3. DIFFERENCE</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We differentiate ourselves by equally prioritizing all three pillars of client satisfaction. While others may focus on one aspect at the expense of others, we maintain a balanced approach to deliver maximum value and client contentment. Since 2011, this strategy has consistently earned high praise from our customers, proving its effectiveness in meeting diverse needs and expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-100 pb-100 mt-100 bg-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30"><span className="tag-1 color-gray-900">Built Exclusively For You</span>
                                <h3 className="text-heading-1 mt-30">Don’t take our word for it. See what our clients say.</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Explore firsthand what our clients have to say about their experience with us.</p>
                                <div className="mt-40">
                                    <Link href="/contact-us" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Hire Us</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"Siman Infotech exceeded our expectations with their cutting-edge solutions and exceptional service. Highly recommended for their expertise and professionalism."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/images/david.png" alt="David_Defoe" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">David Defoe</h4>
                                                <p className="text-body-text-md">Imara Counseling Services</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"At Siman Infotech, we consistently deliver innovative solutions and exceptional service, ensuring client satisfaction through expertise and reliability."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/images/amris.jpg" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Amaris Watson</h4>
                                                <p className="text-body-text-md">Prackind Wellness Group</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"At Siman Infotech, innovation meets reliability, delivering tailored solutions with exemplary service that truly elevate business performance. Highly recommended for their dedication and expertise."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/images/gsbasra.jpg" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Gurpreet Singh Basra</h4>
                                                <p className="text-body-text-md">Redstone Immigrations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"Siman Infotech delivers innovative solutions and exceptional service, consistently surpassing expectations. Highly recommended for their expertise and client-focused approach."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/images/js.jpeg" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jarnail Singh Khandoli</h4>
                                                <p className="text-body-text-md">GKM Media Inc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="bd-bottom pb-70">
                            <ul className="list-5-col">
                                <li><span className="text-display-4 color-green-900"><span className="count">13</span>+</span>
                                    <p className="text-body-text color-gray-500 pl-40">Years in<br />Business</p>
                                </li>
                                <li><span className="text-display-4 color-green-900"><span className="count">1500</span>+</span>
                                    <p className="text-body-text color-gray-500 pl-40">Projects<br />Completed</p>
                                </li>
                                <li><span className="text-display-4 color-green-900"><span className="count">150</span>+</span>
                                    <p className="text-body-text color-gray-500 pl-40">Countries<br />Served</p>
                                </li>
                                <li><span className="text-display-4 color-green-900"><span className="count">1000</span>+</span>
                                    <p className="text-body-text color-gray-500 pl-40">Customers<br />Served</p>
                                </li>
                                <li><span className="text-display-4 color-green-900"><span className="count">22</span>+</span>
                                    <p className="text-body-text color-gray-500 pl-40">Team<br />Members</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
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

export default About3;