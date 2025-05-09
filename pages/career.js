import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";

function Career() {
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
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center"><span className="tag-1 bg-6 color-green-900">Success Together</span>
                                <h1 className="text-display-2 color-gray-900 mt-30">Working with us!!!</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">Our focus is always on finding the best people to work with. Our bar<br className="d-lg-block d-none" />is high, but you look ready to take on the challenge.</div>
                                <div className="mt-50">
                                    <Link href="/team" legacyBehavior><a className="btn btn-black icon-arrow-right-white mb-15 mr-20">Our Awesome Team</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Choose the category<br className="d-lg-block d-none" />where you expert</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">You are confident in your abilities and clear<br className="d-lg-block d-none" />about where you belong, leveraging your full potential.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Graphic Designer" /></span>
                                        <h4 className="text-heading-4">Graphic designer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">A graphic designer creates visual concepts using software, combining art and technology to communicate ideas effectively for various media platforms.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Web Developer" /></span>
                                        <h4 className="text-heading-4">Web developer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">A web developer builds and maintains websites, using programming languages like HTML, CSS, and JavaScript to ensure functionality and user experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Data Scientist" /></span>
                                        <h4 className="text-heading-4">Data Scientist</h4>
                                        <p className="text-body-text color-gray-600 mt-15">A data scientist analyzes complex datasets using statistical methods and machine learning to extract insights and inform decision-making processes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Technical Support" /></span>
                                        <h4 className="text-heading-4">Technical Support</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Technical support provides assistance to users facing issues with software, hardware, or IT systems, aiming to resolve problems and ensure functionality.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Technical Support" /></span>
                                        <h4 className="text-heading-4">Digital Marketing</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Digital marketing utilizes online channels like social media, SEO, and email to promote brands, products, and services, targeting specific audiences effectively.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-40 hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="UI/UX Designer" /></span>
                                        <h4 className="text-heading-4">UI/UX Designer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">A UI/UX designer enhances user experience by creating intuitive interfaces, focusing on usability, accessibility, and aesthetic appeal across digital platforms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <p>We are Sorry! There is no vacancy available for now!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Career;